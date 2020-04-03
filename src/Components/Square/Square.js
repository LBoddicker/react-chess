import React from 'react';
import './Square.css';

//Value - What is displayed
//Callback - function that is called when pressed
//ID - the ID this button is given
//color -- background color

//props.highLight - if the square is highlighted
//props.backgroundColor - what color the background is
//props.value - what piece is on this square
//props.clickCallBack - callback function for when clicked
const Square = (props) => {

    var cur_piece = null
    switch(props.value) {
        case "wKing":
            cur_piece = <img src={ require('../../Images/wKing.png')} alt=""/>
        break;
        case "wQueen":
            cur_piece = <img src={ require('../../Images/wQueen.png')} alt=""/>
        break;
        case "wBishop":
            cur_piece = <img src={ require('../../Images/wBishop.png')} alt=""/>
        break;
        case "wKnight":
            cur_piece = <img src={ require('../../Images/wKnight.png')} alt=""/>
        break;
        case "wRook":
            cur_piece = <img src={ require('../../Images/wRook.png')} alt=""/>
        break;
        case "wPawn":
            cur_piece = <img src={ require('../../Images/wPawn.png')} alt=""/>
        break;
        case "bKing":
            cur_piece = <img src={ require('../../Images/bKing.png')} alt=""/>
        break;
        case "bQueen":
            cur_piece = <img src={ require('../../Images/bQueen.png')} alt=""/>
        break;
        case "bBishop":
            cur_piece = <img src={ require('../../Images/bBishop.png')} alt=""/>
        break;
        case "bKnight":
            cur_piece = <img src={ require('../../Images/bKnight.png')} alt=""/>
        break;
        case "bRook":
            cur_piece = <img src={ require('../../Images/bRook.png')} alt=""/>
        break;
        case "bPawn":
            cur_piece = <img src={ require('../../Images/bPawn.png')} alt=""/>
        break;
        default:
            cur_piece = null
    }

    let className = 'Square'
    if(!props.highLight){
        switch(props.backgroundColor){
            case "black":
                className += ' BlackSquare'
                break;
            case "white":
                className += ' WhiteSquare'
                break;
            default:
                className += ' WhiteSquare'
        }
    }
    else
    {
        className += 'highLightSquare'
    }
    

    return (
        <div>
            <button className={className} onClick={props.clickCallBack}>
                {cur_piece}
            </button>
        </div>
    );
}

export default Square;