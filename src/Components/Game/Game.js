import React from 'react'
import './Game.js'
import Board from "../Board/Board"
import {GameState} from '../../Utils/GameEngine/GameState'
import * as gameLogic from '../../Utils/GameEngine/GameLogic'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  curGame : new GameState(),
                        highlightPosition : [...Array(8)].map(e => Array(8).fill(false))
                    }
    }

    clickCallBack = (clickPos) => {
        console.log(clickPos)
        console.log(this.state.curGame)
        let selectedMoves = []
        if(gameLogic.isPiece(this.state.curGame, clickPos)){
            selectedMoves = gameLogic.getPieceMoves(this.state.curGame, clickPos)
        }

        console.log(selectedMoves)

        let newHLTPositions = [...Array(8)].map(e => Array(8).fill(false))
        selectedMoves.forEach( e => {
            newHLTPositions[e.ePos.row][e.ePos.col] = true
        })

        this.setState({ highlightPosition : newHLTPositions })
    }

    render() {
        return (
            <div>
                <Board
                    pieceArr={this.state.curGame.piecePositions}
                    highlightArr={this.state.highlightPosition}
                    clickCallBack={this.clickCallBack}
                />
            </div>
        )  
    }
}

export default Game;