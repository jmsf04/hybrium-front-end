import {BrowserRouter, Switch} from "react-router-dom";
import LeftNavBar from "../../components/leftNavBar/leftNavBar";
import NavBar from "../../components/navBar/navBar";

export const Default = props => (
    <BrowserRouter>

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

