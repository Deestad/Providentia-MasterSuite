import React from "react";
import {render} from "react-dom";
import Message from "./message";

export default class App extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <Message />
            </div>
)
        ;
    }
}

const NotifDiv = document.getElementById("notifications-inner");
render(<App />, NotifDiv)