
import {FaCamera} from "react-icons/fa";
import {Form} from "@unform/web";
import Input from "../../components/form/input";
import axios from 'axios';

export const EmployeeCreate = () => {

        const handleSubmit = (data) => {
            axios.post('http://localhost:3004/employees', data).then( res => window.location = '/').catch(err => console.log(err));
        };

        return (
            <div className="infoScreenContainer">
                <Form onSubmit={handleSubmit}>
                    <div className="options">
                        <p className="title">Adicionar colaborador</p>
                        <button type="button" onClick={() => {
                            window.location="/";
                        }} className="inativarB">Cancelar</button>
                        <button type="submit" className="editarB">Salvar</button>
                    </div>
                    <div className="infos">
                        <div className="addCard">
                            <div className="info1">
                                <div className="circle">
                                    <FaCamera className="camera"/>
                                </div>
                                <div>
                                    <Input className="tbNome" placeholder="Nome do colaborador" name="name" />
                                </div>
                            </div>
                            <div className="info2">
                                <p className="titleD">Informações</p>
                                <div className="info2_1">

                                    <div>
                                        <p className="titleD2">CPF</p>
                                        <Input className="tbDados" placeholder="Digite o CPF" name="document" />
                                    </div>
                                    <div className="info2_1_1">
                                        <p className="titleD2">E-mail</p>
                                        <Input className="tbDados" placeholder="Digite o E-mail do colaborador" name="email" />
                                    </div>
                                </div>
                                <p className="titleD2">Telefone</p>
                                <Input className="tbDados" placeholder="(xx) xxxxx-xxxx" name="phone" />
                            </div>
                            <div className="info3">
                                <p className="titleD3">Ocupação</p>
                                <Input className="tbDados" placeholder="Ocupação do colaborador?" name="occupation" />
                                <p className="titleD3">Horário de expediente</p>
                                <div className="add3_1">
                                    <Input className="tbDados" placeholder="Horário de entrada" name="workHourBegin" />
                                    <Input id="hSaida" className="tbDados" placeholder="Horário de saída" name="workHourEnd" />

                                </div>
                                <p className="titleD3">Horário de almoço</p>
                                <div className="add3_1">

                                    <Input className="tbDados" placeholder="Horário de entrada" name="lunchTimeBegin" />
                                    <Input id="hSaida" className="tbDados" placeholder="Horário de saída" name="lunchTimeEnd" />

                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
;