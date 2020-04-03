import React from 'react';
import './Board.css';
import Square from '../Square/Square'

//Board must have callback function
//Board must be past state to know what values to fillout

const Board = (props) => {

    const makeButton = (data) => {
        return (
            <Square value={data} />
        )
    } 

    return (
        <div className="Board">
            <div className="Row">
                This is a test
            </div>
           
        </div>
    )
}

export default Board;