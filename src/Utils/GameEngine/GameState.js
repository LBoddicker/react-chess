import { PIECE } from './GameHelpers'

export class GameState {
    constructor() {
        this.piecePositions = [     [PIECE.BLACK_ROOK,PIECE.BLACK_KNIGHT,PIECE.BLACK_BISHOP,PIECE.BLACK_QUEEN,PIECE.BLACK_KING,PIECE.BLACK_BISHOP,PIECE.BLACK_KNIGHT,PIECE.BLACK_ROOK],
                                    [PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN,PIECE.BLACK_PAWN],
                                    [null,null,null,null,null,null,null,null],
                                    [null,null,null,null,null,null,null,null],
                                    [null,null,null,null,null,null,null,null],
                                    [null,null,null,null,null,null,null,null],
                                    [PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN,PIECE.WHITE_PAWN],  
                                    [PIECE.WHITE_ROOK,PIECE.WHITE_KNIGHT,PIECE.WHITE_BISHOP,PIECE.WHITE_QUEEN,PIECE.WHITE_KING,PIECE.WHITE_BISHOP,PIECE.WHITE_KNIGHT,PIECE.WHITE_ROOK]]
        this.movesSoFar = 0
        this.whiteIsNext = true
        this.cellSelected = null
        this.moveHistory = []
    }
}