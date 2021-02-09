
import { useState } from 'react';


const LeftSide=()=>{
    const [title, setTitle] = useState("Your automation pipeline");
    const [subtitle,setSubTitle]=useState("Marketing automation");
    //console.log(title);
 const handleClick=()=>{
        console.log("I was clicked-backbutton")
    }
    return(
        <>
        <div id="leftside" >
            <div id="details">
                <div id="back" onClick={handleClick}>
                    <img src="./assets/arrow.svg" alt="missing" />
                </div>
                <div id="names">
                    <p id="title">{title}</p>
                    <p id="subtitle">{subtitle}</p>
                </div>
            </div>            
        </div>
        </>
    )
}

export default LeftSide;