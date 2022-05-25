import "./SubmitResponse.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function SubmitResponse() {
    const [submision, setSubmit] = useState({ data: {} })
    const [title, setTitle] = useState('')
    const [originFields, setFields] = useState([{ question: '', answers: [], correct_answer: '' }, ])
    const [error, setError] = useState('')
    const submitResponse = (e) => {
        e.preventDefault();
        setSubmit(submision.data = { title, "questions": originFields })
        axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes', submision, { headers: { "X-Access-Token": 'c42433e5820d218517398a546dc247f07d08f03198bc1f326c30979b96d00824', } })
            .then((res) => {})
            .catch((err) => { console.log(error) })
    }



    return ( <
        div className = "SubmitResponseForum"
        style = {
            { backgroundImage: 'url("./quizz background.jpg")' } } >
        <
        Link to = "/quizzes/submit" >
        <
        form onSubmit = { submitResponse } >
        <
        /form> <
        button className = "submitQuizzButton"
        onclick = { submitResponse } > Submit your answers < /button> <
        /Link> <
        /div>
    );
}

export default SubmitResponse;