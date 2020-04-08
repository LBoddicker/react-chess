import * as gameLogic from './GameLogic'
import { GameState } from './GameState'
import { PIECE, SIDE, Position, Move } from './GameHelpers'

let testGameState = new GameState()

test('getPiece_test', () => {
    let nullPiece = gameLogic.getPiece(testGameState, new Position(3,0))
    let wKingPiece = gameLogic.getPiece(testGameState, new Position(7,4))
    let bPawnPiece = gameLogic.getPiece(testGameState, new Position(1,1))

    expect(nullPiece).toBe(null)
    expect(wKingPiece).toBe(PIECE.WHITE_KING)
    expect(bPawnPiece).toBe(PIECE.BLACK_PAWN)
})
