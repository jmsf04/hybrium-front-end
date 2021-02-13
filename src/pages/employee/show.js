import UCardInfo from "../../components/UCardInfo";
import HCardInfo from "../../components/hCardInfo";
import {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "axios";

export const EmployeeShow = () => {

    const [employee, setEmployee] = useState([]);
    const params = useParams();

    useEffect(() => {
        getEmployee(params.id);
    }, []);


    const deleteEmployee = () => {
        axios.delete('http://localhost:3004/employees/' + params.id)
            .then(response => {
                window.location = '/';
            })
            .catch(error => console.log(error));
    };

    const getEmployee = (param) => {
        axios.get('http://localhost:3004/employees/' + param)
            .then(response => {
                setEmployee(response.data)
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="infoScreenContainer">
            <div className="options">
                <p className="title">Detalhes do colaborador</p>
                <button className="inativarB" onClick={deleteEmployee}>Inativar colaborador</button>
                <Link to={"/employee/" + params.id + "/edit"}>
                    <button className="editarB">Editar colaborador</button>
                </Link>

            </div>
            <div className="infos">
                <UCardInfo employee={employee} />
                <div className="hPainel">
                    <div className="hPainel2">
                        <p className="titleH">Histórico de entrada de saída</p>
                    </div>
                    <div className="hPainel3">
                        <HCardInfo/>
                        <HCardInfo/>
                        <HCardInfo/>
                        <HCardInfo/>
                        <HCardInfo/>
                        <HCardInfo/>
                    </div>
                </div>
            </div>
        </div>
    )
};