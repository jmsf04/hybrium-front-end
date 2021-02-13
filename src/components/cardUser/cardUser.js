import {BiUserCircle} from "react-icons/bi";
import {Link} from "react-router-dom";

const CardUser = props => (
    <div className="cardUser">
        <BiUserCircle className="userIcon"/>
        <Link to={props.to}>
            <p className="userName">{props.children}</p>
        </Link>
    </div>
);

export default CardUser;