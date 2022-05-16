import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";
import CreateUser from './pages/users/CreateUser/CreateUser';

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
        />

        <
        /Routes> <
        /div>
    );
}

export default App;