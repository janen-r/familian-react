import React from "react";

import BackgroundImage from "./components/wallpaper/BackgroundImage";
import Todos from "./components/todos/Todos";

import "@material-tailwind/react/tailwind.css";

function App() {
    return (
        <div className="App">
            {/* <BackgroundImage /> */}
            <Todos />
        </div>
    );
}

export default App;