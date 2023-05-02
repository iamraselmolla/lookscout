import { createBrowserRouter } from "react-router-dom";
import AdminPanel from "../components/Admin/AdminPanel";
import Home from "../components/Home/Home";
import Main from "../Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "adminPanel",
                element : <AdminPanel></AdminPanel>
        
            }
        ]
    }
])