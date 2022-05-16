import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CreateUser.css"

function CreateUser() {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        const postUserData = { data: { name, surname } }
        axios.post('https://pure-caverns-82881.herokuapp.com/api/v54/users', postUserData, {
            headers: {
                "X-Access-Token": '2ef40268b1274769d2657475211ce9742ceaed9d1a08d8049575fa9f18f8b572',
            }
        }).then((response) => {
            postUserData.data.name = response.data.name;
            postUserData.data.surname = response.data.surname;
            localStorage.setItem("user-data", JSON.stringify(postUserData["data"]))
        })
    }
    return ( <
        div className = "createUserform" >

        <
        Link to = "/users"
        className = "create_user" >
        <
        form onSubmit = { handleSubmit } >
        <
        h1 className = "header_1_text" > New User < /h1> <
        label htmlFor = "name"
        className = "addName" > Name < /label> <
        input type = "text"
        className = "addNameForm"
        value = { name }
        onChange = {
            (e) =>
            setName(e.target.value)
        } >

        <
        /input> <
        label htmlFor = "surname"
        className = "addSurname" > Surname < /label>

        <
        input type = "text"
        className = "addSurnameForm"
        value = { surname }
        onChange = {
            (e) =>
            setSurname(e.target.value)
        } >

        <
        /input> <
        button type = "submit"
        className = "btn create_user" > Add User < /button> <
        /form>

        <
        /Link> <
        /div>
    );
}
export default CreateUser;