import "./Example.css"
import { useState } from "react"

const Example = () => {
    const[title,setTitle] = useState("Muj prvni title")
    const[buttonText,setButtonText] = useState("puvodni text tlacitka")

    const buttonHandler = () => {
        setTitle("Novy text titlu")
    }

    const button2Handler = () => {
        setTitle("xxxxxxxxxx")
    }

    const deleteAll = ()=>{
        setTitle("")
    }

    const buttonChange = ()=>{
        setButtonText("novy text tlacitka")
    }

    



    return (
        <div>
            <h1>{title}</h1>
            <button type="button" onClick={ buttonHandler}>{title}</button>
            <button type="button" onClick={ button2Handler}>{title}</button>
            <button type="button" onClick={ deleteAll}>{title}</button>
            <button type="button" onClick={ buttonChange}>{buttonText}</button>
        </div>
       
    )

}

export default Example