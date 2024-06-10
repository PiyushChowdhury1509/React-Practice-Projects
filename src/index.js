import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Body from "./components/body";
import Accordion from "./components/Accordion";

const AppLayout=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

const AppRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"",
                element:<Body/>
            },
            {
                path:"accordian",
                element:<Accordion/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);