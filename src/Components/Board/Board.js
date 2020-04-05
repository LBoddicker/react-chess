import React from 'react';
import './Board.css';
import Square from '../Square/Square'

const boardColor = [["white","black","white","black","white","black","white","black"],
                    ["black","white","black","white","black","white","black","white"],
                    ["white","black","white","black","white","black","white","black"],
                    ["black","white","black","white","black","white","black","white"],
                    ["white","black","white","black","white","black","white","black"],
                    ["black","white","black","white","black","white","black","white"],
                    ["white","black","white","black","white","black","white","black"],
                    ["black","white","black","white","black","white","black","white"]]

//Board must have callback function
//Board - square color

//we get passed two 2d arrays
//we get passed a general callback function
//used this to create a 2d array of buttons

//convert the 2d array of buttons into html formatted stuff

//insert in the return statement

//props.pieceArr - an 8x8 array with piece location
//props.backgroundArr - an 8x8 array with background color info
//props.highlightArr - an 8x8 array with info on which squqares are highlighted
//props.clickCallBack - callback function for the squares
const Board = (props) => {
    const getID = (row, col) => {
        let ret = 0
        ret = row*8 + col
        return ret
    }

    //is the key situation here okay? There are overlaping keys for the square and the div
    const getRow = (rowNum) => {
        return(
            <div className="Row" key={rowNum}> 
                { props.pieceArr[rowNum].map( (d, idx) => <Square clickCallBack={() => props.clickCallBack(getID(rowNum, idx))} key={getID(rowNum, idx)} highLight={props.highlightArr[rowNum][idx]} backgroundColor={boardColor[rowNum][idx]} value={d}/>) }
            </div>
        )
    }

    const convertButtonArr = () => {
        return(
            <div className="Board">
                {props.pieceArr.map((d, idx) => getRow(idx))}
            </div>
        )    
    }

    return (
        <div>
            {convertButtonArr()}
        </div>
    )
}

export default Board;