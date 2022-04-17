import React from "react";

import BackgroundImage from "./components/wallpaper/BackgroundImage";
import Todos from "./components/todos/Todos";
import "@material-tailwind/react/tailwind.css";

function App() {
    return (
        <div className="App">
            {/* <BackgroundImage /> */}
            <Todos />
            {/* <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'> */}
<div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
        </div>
    );
}

export default App;