import React, {Component} from 'react';

class HCardInfo extends Component{
    render(){
        return (
            <div className="hCard">
                <div className="hCardInfo">
                    <p className="dia">25</p>
                    <p className="titleH">Dezembro</p>
                </div>
                <div className="hCardInfo">
                    <p className="titleD3">Expediente</p>
                    <p className="titleD2">Entrou</p>
                    <p className="dados">08:30</p>
                    <p className="titleD2">Saiu</p>
                    <p className="dados2">17:50</p>
                </div>
                <div className="hCardInfo">
                    <p className="titleD3">Almoço</p>
                    <p className="titleD2">Entrou</p>
                    <p className="dados">12:00</p>
                    <p className="titleD2">Saiu</p>
                    <p className="dados2">13:00</p>
                </div>
            </div>
          );
    }
}

export default HCardInfo;