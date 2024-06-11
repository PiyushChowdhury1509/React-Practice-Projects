import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Body from "./components/body";
import Accordion from "./components/Accordion";
import ImageSlider from "./components/image_slider";
import InfiniteScrolling from "./components/infinite_scrolling";

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
            },
            {
                path:"image_slider",
                element:<ImageSlider/>
            },
            {
                path: "infinite_scrolling",
                element:<InfiniteScrolling/>
            }
        ]
    }
])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={AppRouter}/>);