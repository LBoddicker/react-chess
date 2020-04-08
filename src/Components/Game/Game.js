import React from 'react'
import './Game.js'
import Board from "../Board/Board"
import { PIECE } from '../../Utils/enums'

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  }
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