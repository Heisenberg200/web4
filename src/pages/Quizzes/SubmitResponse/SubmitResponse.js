import "./SubmitResponse.css";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function SubmitResponse(){
    const [id, getQuizID] = useState("")
    
axios
.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/{{id}}/submit')
    

    return(
        <div className = "SubmitResponseForum">
            <Link to = "/quizzes/{{id}}/submit">
             <form>
                 
             </form>
            </Link>
        </div>
    );
}

