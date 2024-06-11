import { Link } from "react-router-dom"

const Body=()=>{
    return(
        <>
        <ul>
            <li><Link to={"/accordian"}>Accordian</Link></li>
            <li><Link to={"/image_slider"}>Image Slider</Link></li>
        </ul>
        </>
    )
}

export default Body;