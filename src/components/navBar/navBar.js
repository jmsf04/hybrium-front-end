import React, {Component} from 'react';
import { AiOutlineBell } from "react-icons/ai";
import { AiTwotoneAppstore } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

class NavBar extends Component{
    render(){
        return (
                <nav className="topBar">
                    <div className="container">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div className="container2">
                        <AiOutlineBell className="icons"/>
                        <AiTwotoneAppstore className="icons"/>
                        <p>{ localStorage.getItem('user') }</p>
                        <BiUserCircle onClick={this.exibirPerfil} className="icons"/>
                        <FiLogOut className="icons" onClick={() => {
                            localStorage.removeItem('isLogged');
                            window.location = '/login';
                        }}>Logout</FiLogOut>
                    </div>
                </nav>
          );
    }
}

export default NavBar;