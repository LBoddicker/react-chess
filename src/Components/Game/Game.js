import React from 'react'
import './Game.js'
import Board from "../Board/Board"

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {  piecePosition : [...Array(8)].map(e => Array(8).fill(null)),
                        highlightPostion : [...Array(8)].map(e => Array(8).fill(null)),
                    }
    }

    render() {
        return (
            <div>
                <Board />
            </div>
        )  
    }
}

export default Game;