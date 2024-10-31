import profPic from './assets/mail.png';
import React, { useState } from 'react';
function Card(){
    const [buttonText, setTextbtn] = useState('Submit');


    const clicked = ()=>{
        setTextbtn(
            buttonText === "Submit" ? "Submitted" : "Submit");     
    };
    return (
        <div className= "card">
            <img alt="profilePic.png" src={profPic}/>
            <h2>PizzeE</h2>
            <p>I am doing some coding for parctice, which is fun.</p>
            <button id='btn' onClick={clicked}>{buttonText}</button>
        </div>
    );
}






export default Card