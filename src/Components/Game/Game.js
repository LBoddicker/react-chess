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
                        }
    }

    clickCallBack = (id) => {
        console.log("this button was clicked: " + id)
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