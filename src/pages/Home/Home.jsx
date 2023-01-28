import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    const [selectors, setSelectors] = React.useState();

    React.useEffect(() => {
        fetch('https://job-task-server-hasibul240.vercel.app/select_options')
            .then(res => res.json())
            .then(data => setSelectors(data))
    }, [])


    const handle_submit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const select = form.select.value;
        const terms = form.terms.checked;

        const info = { name, select, terms }

        fetch("https://job-task-server-hasibul240.vercel.app/add_user", {
            method: "POST",
            headers: { 'content-type': 'application/json', },
            body: JSON.stringify(info)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    // alert('User added successfully');
                    toast.success('User added successfully');
                    form.reset();
                }
            })

    }


    return (
        <div className='main_container'>
            <div className='sub_container'>
                <p className='head_text'>Please enter your name and pick the Sectors you are currently involved in.</p>
                <form className='main_form' onSubmit={handle_submit}>
                    <label htmlFor="">Name:</label><br />
                    <div className='input_name'>
                        <input className='input' type="text" name='name' placeholder='Enter your Name' required />
                    </div>
                    <label htmlFor="">Sectors:</label><br />
                    <select name='select' className='select_option' multiple="" size="5" required>
                        {
                            selectors && selectors.map((selector, index) => {
                                if (selector.value === '1' || selector.value === '11' || selector.value === '2' || selector.value === '3' || selector.value === '13' || selector.value === '12'|| selector.value==='9'||selector.value==='5'||selector.value==='7'||selector.value==='8') {
                                    return <option disabled key={index} value={selector.value}>{selector.name}</option>
                                } else {
                                    if (selector.value ==='19' || selector.value ==='18' || selector.value ==='6'|| selector.value==='67' || selector.value==='263'|| selector.value==='267'|| selector.value==='242'||selector.value==='54'||selector.value==='556'||selector.value==='559'||selector.value==='44'||selector.value==='45'||selector.value==='37'||selector.value==='29'||selector.value==='33'||selector.value==='25'||selector.value==='35'||selector.value==='28'||selector.value==='22'||selector.value==='141' || selector.value==='21') {
                                        return <option key={index} value={selector.value} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selector.name}</option>
                                    } else {
                                        return <option key={index} value={selector.value} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{selector.name}</option>
                                    }

                                }
                            })
                        }
                    </select>
                    <input className='terms' name='terms' type="checkbox" required />
                    <label className='terms'>Agree to terms</label><br />
                    <input className='btn button' type="submit" value='Save' />
                </form>
                <div className='footer_buttons'>
                    {/* <button className='btn'>your information</button> */}
                    <Link to='/data' className='Link_button btn button'>All information</Link>
                  
                </div>
            </div>
        </div>
    );
};

export default Home;