import {React} from "react";
 
const Button = (props) =>{
    return (
        <>
            <button style={{ backgroundColor:"red",color:"white",width:`${props.width}px` }}> My Button </button>
        </>
    )
}

export default Button;