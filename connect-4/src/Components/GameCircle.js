import React from 'react';
import './Game.css';


const GameCircle = ({id, children, onCircleClicked}) => {

    const onClick = (ev, id) => {
        debugger;
        onCircleClicked(id);
    }
    
    return (
        <div className={`gameCircle ${id % 2 === 0 ? "odd" : "even"}`} onClick={() => onClick(id)}>
            {children}
        </div>
    )
}

export default GameCircle;