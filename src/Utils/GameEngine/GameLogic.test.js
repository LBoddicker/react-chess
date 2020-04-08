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

test('getSide_test', () => {
    expect(gameLogic.getSide(PIECE.BLACK_QUEEN)).toBe(SIDE.BLACK_SIDE)
    expect(gameLogic.getSide(PIECE.WHITE_PAWN)).toBe(SIDE.WHITE_SIDE)
})

test('areFriends_test', () => {
    expect(gameLogic.areFriends(testGameState, new Position(1,0), new Position(1,3))).toBe(true)
    expect(gameLogic.areFriends(testGameState, new Position(1,0), new Position(6,3))).toBe(false)
    expect(gameLogic.areFriends(testGameState, new Position(1,0), new Position(2,0))).toBe(false)

})