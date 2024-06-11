import { useState } from "react";

const images=[
    "https://th.bing.com/th/id/OIP.Kf13hpLV-VD3_ps0f3DtSwHaEK?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/R.48cf67cfb10c849dc8797c17c4af703c?rik=e%2boe%2fBMNdR6cmA&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fc%2fc8%2fBengal_Tiger.jpg&ehk=vIS5y3IDcAG9IzCF%2fEr7THj0eopN0uikwV0e5iBGWEo%3d&risl=&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.isBHy_HAsmazbKyTp_mw0QHaEK?rs=1&pid=ImgDetMain"
]

const ImageSlider=()=>{
    let [index,setIndex]=useState(0);
    let n=images.length;

    const handleNext=(idx)=>{
        idx===n-1 ? (setIndex(0)) : (setIndex(i=>i+1))
    }
    const handlePrev=(idx)=>{
        idx===0 ? (setIndex(n-1)) : (setIndex(i=>i-1))
    }

    return (
        <>
        <button onClick={()=>handleNext(index)}>next</button>
        <img class="w-80 h-60" src={images[index]}/>
        <button onClick={()=>handlePrev(index)}>prev</button>
        </>
    )
}

export default ImageSlider;