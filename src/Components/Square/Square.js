import React from 'react';
import './Square.css';
import { PIECE } from '../../Utils/GameEngine/GameHelpers'

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
        case PIECE.WHITE_KING:
            cur_piece = <img src={ require('../../Images/wKing.png')} alt=""/>
        break;
        case PIECE.WHITE_QUEEN:
            cur_piece = <img src={ require('../../Images/wQueen.png')} alt=""/>
        break;
        case PIECE.WHITE_BISHOP:
            cur_piece = <img src={ require('../../Images/wBishop.png')} alt=""/>
        break;
        case PIECE.WHITE_KNIGHT:
            cur_piece = <img src={ require('../../Images/wKnight.png')} alt=""/>
        break;
        case PIECE.WHITE_ROOK:
            cur_piece = <img src={ require('../../Images/wRook.png')} alt=""/>
        break;
        case PIECE.WHITE_PAWN:
            cur_piece = <img src={ require('../../Images/wPawn.png')} alt=""/>
        break;
        case PIECE.BLACK_KING:
            cur_piece = <img src={ require('../../Images/bKing.png')} alt=""/>
        break;
        case PIECE.BLACK_QUEEN:
            cur_piece = <img src={ require('../../Images/bQueen.png')} alt=""/>
        break;
        case PIECE.BLACK_BISHOP:
            cur_piece = <img src={ require('../../Images/bBishop.png')} alt=""/>
        break;
        case PIECE.BLACK_KNIGHT:
            cur_piece = <img src={ require('../../Images/bKnight.png')} alt=""/>
        break;
        case PIECE.BLACK_ROOK:
            cur_piece = <img src={ require('../../Images/bRook.png')} alt=""/>
        break;
        case PIECE.BLACK_PAWN:
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
        className += ' HighLightSquare'
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