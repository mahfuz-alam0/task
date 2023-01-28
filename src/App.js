import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import router from './Route/Route';

function App() {
    return (
        <div className="">
            <RouterProvider router={router}></RouterProvider>
            {/* <Home/> */}
            <Toaster />
        </div>
    );
}

export default App;
