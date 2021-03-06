import React, {Component} from 'react';
import { BiUserCircle } from "react-icons/bi";

const UCardInfo = props => (
    <div className="cardInfo">
        <div className="info1">
            <BiUserCircle className="user"/>
            <div>
                <p className="name">{props.employee.name}</p>
                <p className="dados">Cadastrado em 04/02/21</p>
            </div>
        </div>
        <div className="info2">
            <p className="titleD">Informação pessoal</p>
            <div className="info2_1">
                <div>
                    <p className="titleD2">CPF</p>
                    <p className="dados">{props.employee.document}</p>
                </div>
                <div className="info2_1_1">
                    <p className="titleD2">Telefone</p>
                    <p className="dados">{props.employee.phone}</p>
                </div>
            </div>
            <p className="titleD2">E-mail</p>
            <p className="dados">{props.employee.email}</p>
        </div>
        <div className="info3">
            <div className="info3_1">
                <div>
                    <p className="titleD3">Ocupação</p>
                    <p className="dados">{props.employee.occupation}</p>
                </div>
                <div className="info3_1_1">
                    <p className="titleD3">Horário de expediente</p>
                    <p className="dados">{props.employee.workHourBegin} ás {props.employee.workHourEnd}</p>
                </div>
            </div>
            <p className="titleD3">Horário de almoço</p>
            <p className="dados">{props.employee.lunchTimeBegin} ás {props.employee.lunchTimeEnd}</p>
        </div>
    </div>
);

export default UCardInfo;