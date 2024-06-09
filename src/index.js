import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Accordian from "./components/accordian";
import Footer from "./components/footer";
import Header from "./components/header";
import Body from "./components/body";

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
                element:<Accordian/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);