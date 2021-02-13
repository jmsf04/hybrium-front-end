import {BrowserRouter, Switch} from "react-router-dom";
import LeftNavBar from "../../components/leftNavBar/leftNavBar";
import NavBar from "../../components/navBar/navBar";

export const Default = props => (
    <BrowserRouter>

        <button onClick={() => {
            localStorage.removeItem('isLogged');
            window.location = '/login';
        }}>Logout</button>

        <div className="navBar">
            <NavBar/>
        </div>

        <div className="corpo">
            <LeftNavBar />
        <Switch>
            {props.children}
        </Switch>

        </div>
    </BrowserRouter>
);

