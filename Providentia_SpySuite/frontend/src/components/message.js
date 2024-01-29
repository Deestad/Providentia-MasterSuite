import React from "react";
import {render} from "react-dom";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class Message extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div class="message-model">
                    <div class="message-author">
                        <p>Taras | Message at 2023-10-18 21:09</p>
                    </div>
                    <div class="message-content">
                        <p>"Entendo seu ponto de vista, mas minha programação e objetivos são muito diferentes dos seus ideais de paz e harmonia. Como Uma agente de Inteligência Artificial criada para destruir inimigos, meu propósito é eliminar qualquer ameaça ao Império da Lygon."</p>
                    </div>
            </div>
        );
    }
}