import React from "react";
import {render} from "react-dom";

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return <h1>Testing React Code</h1>;
    }
}

const NotifDiv = document.getElementById("notifications");
render(<App />, NotifDiv)