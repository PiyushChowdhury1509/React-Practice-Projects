import { useEffect, useState } from "react";

const PasswordPicker=()=>{
    let [password,setPassword]=useState("");
    let [length,setLength]=useState(6);
    let [number,setNumber]=useState(false);
    let [character,setCharacter]=useState(false);

    const pickPassword=()=>{
        let passwordstring="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwqyz";
        if(number) passwordstring+="1234567890";
        if(character) passwordstring+="!@#$%^&*()_"
        let pass="";
        for(let i=1;i<=length;i++){
            let index=Math.floor(Math.random()*passwordstring.length+1);
            pass+=passwordstring.charAt(index);
        }
        setPassword(pass);
    }

    useEffect(()=>{
        pickPassword();
    },[length,number,character])

    return (
        <>
        <div>
            <input 
            type="text"
            readOnly
            placeholder="password"
            value={password}
            />
            <button onClick={()=>window.navigator.clipboard.writeText(password)}>Copy</button>
        </div>
        <div>
            <input type="range"
            min={6}
            max={50}
            onChange={(e)=>setLength(e.target.value)}
            />

            <label>Length:{length}</label>

            <input
            type="checkbox"
            defaultChecked={number}
            onChange={()=>setNumber((prev)=>!prev)}
            />

            <input
            type="checkbox"
            defaultChecked={character}
            onChange={()=>setCharacter((prev)=>!prev)}
            />
        </div>
        </>
    )
}

export default PasswordPicker;