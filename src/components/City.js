import React from 'react';
import './../styles/City.css';


function City(props) {
    return (<div className="city">
        <span className="city-name">{props.city}</span>
        <span className="close" title="Remove" onClick={props.removeCity}>X</span>
        <div className="city-state-country">
            <span className="city-state">{props.state}</span>&#44;
            <span className="city-country">{props.country}</span>
        </div>
        <div className="city-desc">{props.description}</div>
    </div>)
}

export default City;