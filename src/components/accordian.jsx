import { useState } from "react";

const AccordianCard=({heading,content,show,showInfo,hideInfo,isMulti})=>{
    let [multiple,setMultiple]=useState(false);

    return (
        isMulti ? (
            <>
            <h1>{heading}</h1>
            {multiple && <button onClick={()=>setMultiple(false)}>hide</button>}
            {multiple && <p>{content}</p>}
            {!multiple && <button onClick={()=>setMultiple(true)}>Show</button>}
            </>
        ) :
        (<>
        <h1>{heading}</h1>
        {show && <button onClick={()=>hideInfo()}>Hide</button>}
        {show && <p>{content}</p>}
        {!show && <button onClick={()=>showInfo()}>Show</button>}
        </>)
    )
}

const Accordian=()=>{
    let [showCard,setShowCard]=useState({
        card1:false,
        card2:false,
        card3:false,
    });

    let [isMulti,setIsMulti]=useState(false);

    return (
        <>
        {isMulti && <button onClick={()=>setIsMulti(false)}>Remove Multiclick</button>}
        {!isMulti && <button onClick={()=>setIsMulti(true)}>Allow Multiclick</button>}
        <AccordianCard
        heading="heading1"
        content="content1"
        show={showCard.card1}
        showInfo={()=>{
            setShowCard({
                card1:true,
                card2:false,
                card3:false,
            })
        }}
        hideInfo={()=>{
            setShowCard({
                card1:false,
                card2:false,
                card3:false,
            })
        }}
        isMulti={isMulti}
        />
        <AccordianCard
        heading="heading2"
        content="content2"
        show={showCard.card2}
        showInfo={()=>{
            setShowCard({
                card1:false,
                card2:true,
                card3:false,
            })
        }}
        hideInfo={()=>{
            setShowCard({
                card1:false,
                card2:false,
                card3:false,
            })
        }}
        isMulti={isMulti}
        />
        <AccordianCard
        heading="heading3"
        content="content3"
        show={showCard.card3}
        showInfo={()=>{
            setShowCard({
                card1:false,
                card2:false,
                card3:true,
            })
        }}
        hideInfo={()=>{
            setShowCard({
                card1:false,
                card2:false,
                card3:false,
            })
        }}
        isMulti={isMulti}
        />
        </>
    )
}

export default Accordian;