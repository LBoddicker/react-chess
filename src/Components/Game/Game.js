import React from 'react'
import './Game.js'
import Board from "../Board/Board"
import { PIECE } from '../../Utils/enums'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  piecePosition : [   [PIECE.BLACK_ROOK,PIECE.BLACK_KNIGHT,PIECE.BLACK_BISHOP,PIECE.BLACK_QUEEN,PIECE.BLACK_KING,PIECE.BLACK_BISHOP,PIECE.BLACK_KNIGHT,PIECE.BLACK_ROOK],
                                            [PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN],
                                            [null,null,null,null,null,null,null,null],
                                            [null,null,null,null,null,null,null,null],
                                            [null,null,null,null,null,null,null,null],
                                            [null,null,null,null,null,null,null,null],
                                            [PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN],  
                                            [PIECE.WHITE_ROOK,PIECE.WHITE_KNIGHT,PIECE.WHITE_BISHOP,PIECE.WHITE_QUEEN,PIECE.WHITE_KING,PIECE.WHITE_BISHOP,PIECE.WHITE_KNIGHT,PIECE.WHITE_ROOK]],
                        highlightPostion : [...Array(8)].map(e => Array(8).fill(false)),
                        cellSelected : null
                        }
    }

    arrayDeepCopy = (arrToCopy) => {
        let ret = []
        for(let i = 0; i < arrToCopy.length; i++){
            ret.push(arrToCopy[i].slice())
        }
        return ret
    }

    getRowAndCol = (idx) => {
        let row = Math.floor(idx/8)
        let col = idx % 8
        return [row, col]
    }

    highlightPositions = (positions) => {
        var tempHLTArr = [...Array(8)].map(e => Array(8).fill(false))
        positions.forEach(e => tempHLTArr[e[0]][e[1]] = true)
        this.setState( { highlightPostion : tempHLTArr})
    }

    isWhitePiece = (inPiece) => {
        switch(inPiece){
            case PIECE.WHITE_KING:
                return true;
            case PIECE.WHITE_QUEEN:
                return true;
            case PIECE.WHITE_PAWN:
                return true;
            case PIECE.WHITE_BISHOP:
                return true;
            case PIECE.WHITE_KNIGHT:
                return true;
            case PIECE.WHITE_ROOK:
                return true;
            default:
                return false;
        }
    }

    inBounds = (row, col) => {
        if(row >= 0 && row <= 7 && col >= 0 && col <= 7){
            return true
        }
        return false
    }

    getPawnMoves = (row, col, board) => {
        let ret = []
        if(this.isWhitePiece(board[row][col])){
            if(this.inBounds(row-1, col)){
                ret.push([row-1,col])
            }
        }
        else
        {
            if(this.inBounds(row+1, col)){
                ret.push([row+1,col])
            }
        }
        return ret
    }

    getKnightMoves = (row, col) => {
        let offsets =  [[-2,1],
                    [-2,-1],
                    [2,1],
                    [2,-1],
                    [1,2],
                    [-1,2],
                    [1,-2],
                    [-1,-2]]

        let retSet = []

        offsets.forEach(e => {
            let curRow = row + e[0]
            let curCol = col + e[1]
            if(curRow >= 0 && curCol >= 0 && curRow <= 7 && curRow <= 7){
                retSet.push([curRow, curCol])
            }
        })

        console.log(retSet)

        return retSet
    }

    getRookMoves = (row, col) => {
        
    }

    getMoves = (id) => {
        var rowAndCol = this.getRowAndCol(id)
        let ret = null

        switch(this.state.piecePosition[rowAndCol[0]][rowAndCol[1]]){
            case PIECE.WHITE_KING:
                ret = this.getKingMoves()
                break;
            case PIECE.WHITE_QUEEN:
                ret = this.getKingMoves()
                break;
            case PIECE.WHITE_PAWN:
                ret = this.getPawnMoves(rowAndCol[0],rowAndCol[1],this.state.piecePosition)
                break;  
            case PIECE.WHITE_BISHOP:
                ret = this.getKingMoves()
                break;
            case PIECE.WHITE_KNIGHT:
                ret = this.getKnightMoves(rowAndCol[0],rowAndCol[1])
                break;
            case PIECE.WHITE_ROOK:
                ret = this.getKingMoves()
                break;  
            case PIECE.BLACK_KING:
                ret = this.getKingMoves()
                break;
            case PIECE.BLACK_QUEEN:
                ret = this.getKingMoves()
                break;
            case PIECE.BLACK_PAWN:
                ret = this.getPawnMoves(rowAndCol[0],rowAndCol[1],this.state.piecePosition)
                break;  
            case PIECE.BLACK_BISHOP:
                ret = this.getKingMoves()
                break;
            case PIECE.BLACK_KNIGHT:
                ret = this.getKnightMoves(rowAndCol[0],rowAndCol[1])
                break;
            case PIECE.BLACK_ROOK:
                ret = this.getKingMoves()
                break;
            default:
                ret = []
        }
        console.log(ret)
        return ret
    }

    clickCallBack = (id) => {
        this.highlightPositions(this.getMoves(id))
    }

    render() {
        return (
            <div>
                <Board
                    pieceArr={this.state.piecePosition}
                    highlightArr={this.state.highlightPostion}
                    clickCallBack={this.clickCallBack}
                />
            </div>
        )  
    }
}

export default Game;