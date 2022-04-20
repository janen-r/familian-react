import React from "react";

import BackgroundImage from "./components/wallpaper/BackgroundImage";
import Todos from "./components/todos/Todos";
import "@material-tailwind/react/tailwind.css";
import companyLogo from './Familian-Logo.gif';

function App() {
    return (
        <div className="App">
            <div align="center" style={{ "width":"100%" }}><img src={companyLogo} alt="Familian logo" width={"260px"} style={{ padding:"5%" }}/></div>
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