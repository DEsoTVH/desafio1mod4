import React from 'react';
import Tags from './Tags';

const Card = (props) => {
    const { imageUrl, nombre, descripcion, tagTexto, tagColor } = props;

    return (
        <div className="card">
            <img src={imageUrl} className="card-image" />
            <h2 className="card-name">{nombre}</h2>
            <p className="card-description">{descripcion}</p>
            <Tags texto={tagTexto} backgroundColor={tagColor} />
        </div>
    );
};

export default Card;
