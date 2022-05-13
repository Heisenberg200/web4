import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from "./pages/Landing/Landing";

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
        />


        <
        /Routes> <
        /div>
    );
}

export default App;