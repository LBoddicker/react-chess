import React from 'react';
import './Square.css';

//Value - What is displayed
//Callback - function that is called when pressed
//ID - the ID this button is given
//color -- background color

const Square = (props) => {
    return (
        <div>
            <button className="Square">
                {props.value}
            </button>
        </div>
    );
}

export default Square;