import React, {Component} from 'react';
import { FaCamera } from "react-icons/fa";

class AddCard extends Component{
    render(){
        return (
            <div className="addCard">
                <div className="info1">
                    <div className="circle">
                        <FaCamera className="camera"/>
                    </div>
                    <div>
                        <input className="tbNome" type="text" placeholder="Nome do colaborador"></input>
                    </div>
                </div>
                <div className="info2">
                    <p className="titleD">Informações</p>
                    <div className="info2_1">
                        <div>
                            <p className="titleD2">CPF</p>
                            <input id="cpf" className="tbDados" type="text" placeholder="Digite o CPF"></input>
                        </div>
                        <div className="info2_1_1">
                            <p className="titleD2">E-mail</p>
                            <input id="email" className="tbDados" type="text" placeholder="Digite o E-mail do colaborador"></input>
                        </div>
                    </div>
                    <p className="titleD2">Telefone</p>
                    <input className="tbDados" type="text" placeholder="(xx) xxxxx-xxxx"></input>
                </div>
                <div className="info3">
                    <p className="titleD3">Ocupação</p>
                    <input className="tbDados" type="text" placeholder="Ocupação do colaborador?"></input>
                    <p className="titleD3">Horário de expediente</p>
                    <div className="add3_1">
                        <input className="tbDados" type="text" placeholder="Horário de entrada"></input>
                        <input id="hSaida" className="tbDados" type="text" placeholder="Horário de saída"></input>
                    </div>
                    <p className="titleD3">Horário de almoço</p>
                    <div className="add3_1">
                        <input className="tbDados" type="text" placeholder="Horário de entrada"></input>
                        <input id="haSaida" className="tbDados" type="text" placeholder="Horário de saída"></input>
                    </div>
                </div>
            </div>
          );
    }
}

export default AddCard;