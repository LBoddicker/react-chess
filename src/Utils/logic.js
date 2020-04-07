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

}

//
export const getRookMoves = (board, curPos) => {

}


export const isPieceInDanger = (board, curPos) => {

}

export const isPieceWhite = (board, curPos) => {

}

export const areFriends = (board, aPos, bPos) => {

}

export const isPosOnBoard = (curPos) => {
    let row = curPos[0]
    let col = curPos[1]

    if(row >= 0 && row <= 7 && col >= 0 && col <= 7){
        return true
    }
    return false
}