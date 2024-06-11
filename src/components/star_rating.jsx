import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating=()=>{
    let n=5;
    let [click,setClick]=useState(0);
    let [hover,setHover]=useState(0);

    const handleClick=(idx)=>{
        setClick(idx+1);
    }
    const handleMouseEnter=(idx)=>{
        setHover(idx+1);
    }
    const handleMouseLeave=()=>{
        setHover(0);
    }

    return (
        <>
        <div class="flex">
        {Array(n).fill().map((_,index)=>{
            return <FaStar 
            class="w-11 h-11 space-x-5"
            color= {index<(hover || click) ? "red" : "grey"}
            onClick={()=>handleClick(index)}
            onMouseEnter={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            key={index}/>
        })}

        </div>
        </>
    )
}

export default StarRating;