import {AiOutlineSearch} from "react-icons/ai";
import CardUser from "../../components/cardUser/cardUser";
import axios from 'axios';
import {useState, useEffect} from 'react';

export const Employee = () => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        getEmployees();
    }, []);


    const getEmployees = () => {
        axios.get('http://localhost:3004/employees')
            .then(response => {
                setEmployees(response.data)
            })
            .catch(error => console.log(error));
    };


    return (
        <div className="listScreenContainer">
            <p className="title">Listagem de colaboradores</p>
            <div className="inputs">
                <select>
                    <option>Ordenar por</option>
                    <option>teste</option>
                    <option>teste</option>
                </select>
                <div className="procurar">
                    <input className="teste" type="text" id="txtBusca" placeholder="Procurar"/>
                    <AiOutlineSearch className="icons"/>
                </div>
            </div>
            <div className="painelColab">
                {employees.map(employee => <CardUser to={'/employee/' + employee.id}>{employee.name}</CardUser>)}
            </div>
        </div>
    );

};

