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

    clickCallBack = (id) => {
        var rowAndCol = this.getRowAndCol(id)
        
        this.highlightPositions([rowAndCol])

        // if(this.state.cellSelected === null){
        //     this.setState( {cellSelected : id} )
        // }
        // else if(id === this.state.cellSelected){
        //     this.setState( {cellSelected : null})
        // }
        // else
        // {
        //     var copiedArr = this.arrayDeepCopy(this.state.piecePosition)

        //     let old = this.getRowAndCol(this.state.cellSelected)
        //     let n = this.getRowAndCol(id)

        //     copiedArr[n[0]][n[1]] = this.state.piecePosition[old[0]][old[1]]
        //     copiedArr[old[0]][old[1]] = null 
            
        //     this.setState( {piecePosition : copiedArr,
        //                     cellSelected : null} )
        // }
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