export const PIECE = {
    WHITE_KING : 'whiteKing',
    WHITE_QUEEN : 'whiteQueen',
    WHITE_PAWN : 'whitePawn',
    WHITE_BISHOP : 'whiteBishop',
    WHITE_KNIGHT : 'whiteKnight',
    WHITE_ROOK : 'whiteRook',
    BLACK_KING : 'blackKing',
    BLACK_QUEEN : 'blackQueen',
    BLACK_PAWN : 'blackPawn',
    BLACK_BISHOP : 'blackBishop',
    BLACK_KNIGHT : 'blackKnight',
    BLACK_ROOK : 'blackRook',
}

export const SIDE = {
    WHITE_SIDE : 'whiteSide',
    BLACK_SIDE : 'blackSide',
}

export class Position {
    constructor(row, col) {
        this.row = row
        this.col = col
    }

    isOnBoard() {
        if(this.row >= 0 && this.row <= 7 && this.col >= 0 && this.col <= 7){
            return true
        }
        return false
    }
}

export class Move {
    constructor(startPos, endPos){
        this.sPos = startPos
        this.ePos = endPos
    }
}