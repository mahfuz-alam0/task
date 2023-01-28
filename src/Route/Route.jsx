import { createBrowserRouter } from "react-router-dom";
import Data from "../pages/Data/Data";
import AllInformation from "../pages/Edit/AllInformation";
import Editpage from "../pages/Edit/Editpage";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/data",
        element: <AllInformation></AllInformation>,
    },
    {
        path: "/edit-info/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
        element: <Editpage></Editpage>
    },
    {
        path: "/data",
        element: <Data />,
    }
])
export default router;