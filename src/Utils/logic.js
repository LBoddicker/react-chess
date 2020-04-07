export const getPieceMoves = (board, curPos) => {
    
}

export const getPawnMoves = (board, curPos) => {

}

//
export const getKingMoves = (board, curPos) => {
    const offset = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    let ret = []

    offset.forEach( pos => {
        if(isPosOnBoard(pos)){
            ret.push(pos)
        }
    } )

    return ret
}

//
export const getQueenMoves = (board, curPos) => {

}

//
export const getBishopMoves = (board, curPos) => {

}

//
export const getKnightMoves = (board, curPos) => {
    let offsets =  [[-2,1],
                    [-2,-1],
                    [2,1],
                    [2,-1],
                    [1,2],
                    [-1,2],
                    [1,-2],
                    [-1,-2]]
    let ret = []

    offsets.forEach( e => {
        let potentialPos = [curPos[0]+e[0],curPos[1]+e[1]]
        if(isPosOnBoard(potentialPos)){
            if(isPieceHere(potentialPos)){
                if(!areFriends(board, curPos, potentialPos)){
                    ret.push(potentialPos)
                }
            }
            else
            {
                ret.push(potentialPos)
            }
        }
    })

    return ret
}

//
export const getRookMoves = (board, curPos) => {
    const offsets = [[1,0],[-1,0],[0,1],[0,-1]]
    offsets.forEach( e => {
        let potentialPos = [curPos[0]+e[0],curPos[1]+e[1]]
        while(isPosOnBoard(potentialPos) && !isPieceHere(potentialPos)){
            ret.push(potentialPos)
            potentialPos = [potentialPos[0]+e[0], potentialPos[1]+e[1]]
        }

         
    })
}


export const isPieceInDanger = (board, curPos) => {

}

export const isPieceWhite = (inPiece) => {
    if(inPiece === null){
        throw "isPieceWhite - inPiece is null"
    }

    switch(inPiece){
        case PIECE.WHITE_KING:
            return true;
        case PIECE.WHITE_QUEEN:
            return true;
        case PIECE.WHITE_PAWN:
            return true;
        case PIECE.WHITE_BISHOP:
            return true;
        case PIECE.WHITE_KNIGHT:
            return true;
        case PIECE.WHITE_ROOK:
            return true;
        default:
            return false;
    }
}

export const areFriends = (board, aPos, bPos) => {
    let aPiece = getPiece(board, aPos)
    let bPiece = getPiece(board, bPos)

    if(aPiece != null && bPiece != null){
        if(isPieceWhite(aPiece) === isPieceWhite(bPiece)){
            return true
        }
    }
    return false
}

export const isPosOnBoard = (curPos) => {
    let row = curPos[0]
    let col = curPos[1]

    if(row >= 0 && row <= 7 && col >= 0 && col <= 7){
        return true
    }
    return false
}

export const getPiece = (board, pos) => {
    let ret_piece = board[pos[0]][pos[1]]
    return ret_piece
}

export const isPieceHere = (board, pos) => {
    if(board[pos[0]][pos[1]] === null){
        return false
    }
    return true
}

export const endangersKing = () => {

}