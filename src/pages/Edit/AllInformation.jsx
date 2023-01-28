import React from 'react';
import { Link } from 'react-router-dom';


const AllInformation = () => {

    const [selectors, setSelectors] = React.useState();
    const [users, setUsers] = React.useState();

    React.useEffect(() => {
        fetch('http://localhost:5000/select_options')
            .then(res => res.json())
            .then(data => setSelectors(data))
    }, [])

    React.useEffect(() => {
        fetch("http://localhost:5000/users", {})
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handle_submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const select = form.select.value;
        const terms = form.terms.checked;

        const info = { name, select, terms }

        fetch("http://localhost:5000/add_user", {
            method: "PATCH",
            headers: { 'content-type': 'application/json', },
            body: JSON.stringify(info)
        })

    }

    console.log(users)

    return (
        <div>
            {
                users && users.map((user, index) => {
                    return <div key={index} className='main_container'>
                        <div className='sub_container'>
                            <p className='head_text'>You Can Edit Your data Here</p>
                            <form className='main_form' onSubmit={handle_submit}>
                                <label htmlFor="">Name:</label><br />
                                <div className='input_name'>
                                    <input className='input' type="text" name='name' placeholder={user.name} />
                                </div>
                                <label htmlFor="">Sectors:</label><br />
                                <select name='select' className='select_option' multiple="" size="5" required defaultValue={user.select}>
                                    {
                                        selectors && selectors.map((selector, index) => {
                                            if (selector.value === '1' || selector.value === '2' || selector.value === '3') {
                                                return <option disabled key={index} value={selector.value}>{selector.name}</option>
                                            } else {
                                                return <option key={index} value={selector.value} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selector.name}</option>
                                            }
                                        })
                                    }
                                </select>
                                <div className='down_buttons'>
                                    {/* <button className='btn'>your information</button> */}
                                    <Link className='Link_button btn button' to={`/edit-info/${user._id}`}>Edit</Link>
                                </div>

                            </form>
                            {/* <div className='footer_buttons'>
                            
                            <Link to='/edit' className='Link_button btn button'>Edit information</Link>
                        </div> */}
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default AllInformation;