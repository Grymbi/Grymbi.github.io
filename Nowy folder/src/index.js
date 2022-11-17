import React from "react";
import ReactDOM from "react-dom/client";
import $ from "jquery";
import "./styles/index.css";
import App from "./App";

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App />
    

);


$("#root").load("https://localhost:80/huj.php", {
    huj: "kurwa działa"
})

