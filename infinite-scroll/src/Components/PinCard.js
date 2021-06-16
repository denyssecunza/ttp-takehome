import React from 'react';
import '../styles.css'

function PinCard(props){

  return (
    <div className="card" >
      <img className="card-img" src={props.source} alt={props.alter}/>
      <div className="card-img-overlay" >
        <button className="button">Save</button>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-pins">Pinned: {props.repin} times {props.keyer}</p>
        <a href={props.link} className="img-link">Go To Site</a>
      </div>
    </div>
  );
}

export default PinCard;
