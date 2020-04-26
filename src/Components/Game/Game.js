import React from 'react'
import './Game.js'
import Board from "../Board/Board"
import {GameState} from '../../Utils/GameEngine/GameState'
import * as gameLogic from '../../Utils/GameEngine/GameLogic'
import { Move, Position } from '../../Utils/GameEngine/GameHelpers.js'
const isEqual = require('lodash/isEqual')

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  curGame : new GameState(),
                        highlightPosition : [...Array(8)].map(e => Array(8).fill(false)),
                        curSelectedCell : null,
                        whitesTurn: true,
                    }
    }

    getHLTArray = (curPos) => {
        let selectedMoves = []
        if(gameLogic.isPiece(this.state.curGame, curPos)){
            selectedMoves = gameLogic.getPieceMoves(this.state.curGame, curPos)
        }

        let newHLTPositions = [...Array(8)].map(e => Array(8).fill(false))
        selectedMoves.forEach( e => {
            newHLTPositions[e.ePos.row][e.ePos.col] = true
        })

        newHLTPositions[curPos.row][curPos.col] = true

        return newHLTPositions
    }

    clickCallBack = (clickPos) => {
        if(this.state.curSelectedCell === null && gameLogic.isPiece(this.state.curGame, clickPos)){
            let hltArr = this.getHLTArray(clickPos)
            this.setState({ highlightPosition : hltArr,
                            curSelectedCell : clickPos})
        }
        else if(isEqual(this.state.curSelectedCell, clickPos))
        {
            console.log('same stuff selected')
            this.setState({ highlightPosition : [...Array(8)].map(e => Array(8).fill(false)),
                            curSelectedCell : null })
        }
        else
        {
            //here we use the fact that all valid moves are highlighted already
            //We check to see if the requested move is valid and if so move the piece
            //If not valid we do nothing
            if(this.state.highlightPosition[clickPos.row][clickPos.col] && !isEqual(this.state.curSelectedCell, clickPos)){
                let newGameState = gameLogic.makeMove(this.state.curGame, new Move(this.state.curSelectedCell, clickPos))
                this.setState({
                    curGame : newGameState,
                    highlightPosition : [...Array(8)].map(e => Array(8).fill(false)),
                    curSelectedCell : null
                })
            }
        }
        
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