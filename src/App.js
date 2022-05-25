import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";
import CreateUser from './pages/users/CreateUser/CreateUser';
import SubmitResponse from './pages/Quizzes/SubmitResponse/SubmitResponse';

function App() {
    return ( <
        div className = "App"
        style = {
            { backgroundImage: 'url("./quizz background.jpg")' } } >
        <
        Routes >
        <
        Route exact path = "/landing"
        element = { < Landing / > }
        /> <
        Route exact path = "/users"
        element = { < CreateUser / > }
        /> <
        Route exact path = "/quizzes/submit"
        element = { < SubmitResponse / > }
        /> <
        /Routes> <
        /div>
    );
}

export default App;