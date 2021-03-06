
import {FaCamera} from "react-icons/fa";
import {Form} from "@unform/web";
import Input from "../../components/form/input";
import axios from 'axios';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export const EmployeeEdit = () => {

        const [employee, setEmployee] = useState([]);
        const params = useParams();

        useEffect(() => {
            getEmployee(params.id);
        }, []);

        const getEmployee = (param) => {
            axios.get('http://localhost:3004/employees/' + param)
                .then(response => {
                    setEmployee(response.data)
                })
                .catch(error => console.log(error));
        };

        const handleSubmit = (data) => {
            axios.put('http://localhost:3004/employees/' + params.id, data).then( res => window.location = '/').catch(err => console.log(err));
        };

        return (
            <div className="infoScreenContainer">
                <Form onSubmit={handleSubmit}>
                    <div className="options">
                        <p className="title">Adicionar colaborador</p>
                        <button className="inativarB">Cancelar</button>
                        <button type="submit" className="editarB">Salvar</button>
                    </div>
                    <div className="infos">
                        <div className="addCard">
                            <div className="info1">
                                <div className="circle">
                                    <FaCamera className="camera"/>
                                </div>
                                <div>
                                    <Input className="tbNome" placeholder="Nome do colaborador" name="name" defaultValue={employee.name}/>
                                </div>
                            </div>
                            <div className="info2">
                                <p className="titleD">Informações</p>
                                <div className="info2_1">

                                    <div>
                                        <p className="titleD2">CPF</p>
                                        <Input className="tbDados" placeholder="Digite o CPF" name="document" defaultValue={employee.document} />
                                    </div>
                                    <div className="info2_1_1">
                                        <p className="titleD2">E-mail</p>
                                        <Input className="tbDados" placeholder="Digite o E-mail do colaborador" name="email" defaultValue={employee.email} />
                                    </div>
                                </div>
                                <p className="titleD2">Telefone</p>
                                <Input className="tbDados" placeholder="(xx) xxxxx-xxxx" name="phone" defaultValue={employee.phone} />
                            </div>
                            <div className="info3">
                                <p className="titleD3">Ocupação</p>
                                <Input className="tbDados" placeholder="Ocupação do colaborador?" name="role" defaultValue={employee.role} />
                                <p className="titleD3">Horário de expediente</p>
                                <div className="add3_1">
                                    <Input className="tbDados" placeholder="Horário de entrada" name="workHourBegin" defaultValue={employee.workHourBegin} />
                                    <Input id="hSaida" className="tbDados" placeholder="Horário de saída" name="workHourEnd" defaultValue={employee.workHourEnd} />

                                </div>
                                <p className="titleD3">Horário de almoço</p>
                                <div className="add3_1">

                                    <Input className="tbDados" placeholder="Horário de entrada" name="lunchTimeBegin" defaultValue={employee.lunchTimeBegin} />
                                    <Input id="hSaida" className="tbDados" placeholder="Horário de saída" name="lunchTimeEnd" defaultValue={employee.lunchTimeEnd} />

                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }
;