import React from 'react'
import { Link } from "react-router-dom"
import "./Landing.css";

function Landing() {
    return ( <
        div className = 'landing'
        style = {
            { backgroundImage: 'url("./quizz background.jpg")' } } >
        <
        Link to = "/landing"
        className = "landing_text" >
        Dynamic quiz landing page <
        /Link> <
        hr className = "separationBar" / >
        <
        /div>
    )
}

export default Landing