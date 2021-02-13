import {Route} from 'react-router-dom';
import Login from '../pages/login';
import { Default } from '../pages/layout/default';
import {Employee} from '../pages/employee/index';
import {EmployeeCreate} from "../pages/employee/create";
import {EmployeeShow} from "../pages/employee/show";
import {EmployeeEdit} from "../pages/employee/edit";

const isLogged = localStorage.getItem('isLogged') && localStorage.getItem('isLogged') == 'true';

const Logged = () => (
    <Default>
        <Route path="/" exact={true} component={Employee}></Route>
        <Route path="/employee" exact={true} component={Employee}></Route>
        <Route path="/employee/create" exact={true} component={EmployeeCreate}></Route>
        <Route path="/employee/:id" exact={true} component={EmployeeShow}></Route>
        <Route path="/employee/:id/edit" exact={true} component={EmployeeEdit}></Route>
        <Route path="/add" exact={true} component={Employee}></Route>
    </Default> 
);

const NotLogged = () => (
    <Login />
);

export const Routes = () => {
    return isLogged ? <Logged/> : <NotLogged />
};