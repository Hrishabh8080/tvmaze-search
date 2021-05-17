import React from 'react';
import logo from './tvmlogo.png'
import {Link} from 'react-router-dom'
function CardItem(props) {
    return (
        <div className="card" >
            <img src={props.image} className="card-img-top  " alt={logo} />
            <div className="card-body m-0 p-1">
                <h5 className="text-left p-1 m-0 card-title">{props.title}</h5>
                <p className="text-left p-1 m-0 card-text">{((props.des).replace(/^(.{40}[^\s]*).*/, "$1") + "\n").replace(/<[^>]+>/g, '')}...</p>
                <div className="text-right m-0">
                    <Link to={`/id/${props.id}`}  className=" btn btn-link">More details...</Link  >
                </div>
            </div>
        </div>
    )
}

export default CardItem
