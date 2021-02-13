import React, {Component} from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { HiUserAdd } from "react-icons/hi";
import {Link} from "react-router-dom";

class LeftNavBar extends Component{
    render(){
        return (
                <nav className="left">
                    <Link className="card" to='/employee'>
                        <GiHamburgerMenu className="lIcons"/>
                        <p>Listagem de <br/> colaboradores</p>
                    </Link>

                    <Link className="card" to='/employee/create'>
                        <HiUserAdd className="lIcons"/>
                        <p>Adicionar um<br/> colaborador</p>
                    </Link>
                </nav>
          );
    }
}

export default LeftNavBar;