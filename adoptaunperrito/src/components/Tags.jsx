import React from 'react';

const Tags = (props) => {
    const { texto, backgroundColor } = props;

    return (
        <div className={`badge bg-${backgroundColor}`}>
            {texto}
        </div>
    );
};

export default Tags;