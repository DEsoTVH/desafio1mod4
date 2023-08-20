import React from 'react';
import Tags from './Tags';

const Card = (props) => {
    return (
        <div className="card">
        <img src={props.imageUrl} className="card-image" />
        <h2 className="card-name">{props.nombre}</h2>
        <p className="card-description">{props.descripcion}</p>
        <Tags texto={props.tagTexto} backgroundColor={props.tagColor} />
    </div>
);
};

export default Card;
