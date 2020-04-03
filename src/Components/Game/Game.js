import React from 'react'
import './Game.js'
import Board from "../Board/Board"

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  piecePosition : [   ["bRook","bKnight","bBishop","bQueen","bKing","bBishop","bKnight","bRook"],
                                            ["bPawn","bPawn","bPawn","bPawn","bPawn","bPawn","bPawn","bPawn"],
                                            [null,null,null,null,null,null,null,null],
                                            [null,null,null,null,null,null,null,null],
                                            [null,null,null,null,null,null,null,null],
                                            [null,null,null,null,null,null,null,null],
                                            ["wPawn","wPawn","wPawn","wPawn","wPawn","wPawn","wPawn","wPawn"],
                                            ["wRook", "wKnight", "wBishop","wQueen","wKing","wBishop","wKnight","wRook"]],
                        highlightPostion : [...Array(8)].map(e => Array(8).fill(false)),
                        boardColor : [  ["white","black","white","black","white","black","white","black"],
                                        ["black","white","black","white","black","white","black","white"],
                                        ["white","black","white","black","white","black","white","black"],
                                        ["black","white","black","white","black","white","black","white"],
                                        ["white","black","white","black","white","black","white","black"],
                                        ["black","white","black","white","black","white","black","white"],
                                        ["white","black","white","black","white","black","white","black"],
                                        ["black","white","black","white","black","white","black","white"]],
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

    clickCallBack = (id) => {
        if(this.state.cellSelected === null){
            this.setState( {cellSelected : id} )
        }
        else if(id === this.state.cellSelected){
            this.setState( {cellSelected : null})
        }
        else
        {
            var copiedArr = this.arrayDeepCopy(this.state.piecePosition)

            let old = this.getRowAndCol(this.state.cellSelected)
            let n = this.getRowAndCol(id)

            copiedArr[n[0]][n[1]] = this.state.piecePosition[old[0]][old[1]]
            copiedArr[old[0]][old[1]] = null 
            
            this.setState( {piecePosition : copiedArr,
                            cellSelected : null} )
        }
    }

    render() {
        return (
            <div>
                <Board
                    pieceArr={this.state.piecePosition}
                    backgroundArr={this.state.boardColor}
                    highlightArr={this.state.highlightPostion}
                    clickCallBack={this.clickCallBack}
                />
            </div>
        )  
    }
}

export default Game;