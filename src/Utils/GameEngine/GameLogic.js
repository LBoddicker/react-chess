import { Move, PIECE, Position, SIDE } from './GameHelpers'
import { GameState } from './GameState'
const cloneDeep = require('lodash/cloneDeep')

/**
 * This a highlevel function that will return a list of Move objects for any piece
 * The list will be parsed to include only valid moves
 * @param {GameState} board 
 * @param {Position} curPos
 * @returns {[Move]} 
 */
export const getPieceMoves = (board, curPos) => {
    let curPiece = getPiece(board, curPos)

    if(curPiece === null){
        console.log("getPieceMoves - piece not selected")
        return []
    }

    switch(curPiece){
        case PIECE.WHITE_KING:
            return getKingMoves(board, curPos)
        case PIECE.WHITE_QUEEN:
            return getQueenMoves(board, curPos)
        case PIECE.WHITE_PAWN:
            return getPawnMoves(board, curPos)
        case PIECE.WHITE_BISHOP:
            return getBishopMoves(board, curPos)
        case PIECE.WHITE_KNIGHT:
            return getKnightMoves(board, curPos)
        case PIECE.WHITE_ROOK:
            return getRookMoves(board, curPos)
        case PIECE.BLACK_KING:
            return getKingMoves(board, curPos)
        case PIECE.BLACK_QUEEN:
            return getQueenMoves(board, curPos)
        case PIECE.BLACK_PAWN:
            return getPawnMoves(board, curPos)
        case PIECE.BLACK_BISHOP:
            return getBishopMoves(board, curPos)
        case PIECE.BLACK_KNIGHT:
            return getKnightMoves(board, curPos)
        case PIECE.BLACK_ROOK:
            return getRookMoves(board, curPos)
        default:
            throw "getPieceMoves - default reached"
    }
}

/**
 * Returns Piece at that position on the board
 * If no Piece exists at that position then a null is returned
 * @param {GameState} board 
 * @param {Position} curPos 
 */
export const getPiece = (board, curPos) => {
    return board.piecePositions[curPos.row][curPos.col]
}

/**
 * returns a enum of what side the piece is on
 * throws error if a piece is not entered
 * @param {PIECE} curPiece 
 */
export const getSide = (curPiece) => {
    switch(curPiece){
        case PIECE.WHITE_KING:
            return SIDE.WHITE_SIDE
        case PIECE.WHITE_QUEEN:
            return SIDE.WHITE_SIDE
        case PIECE.WHITE_PAWN:
            return SIDE.WHITE_SIDE
        case PIECE.WHITE_BISHOP:
            return SIDE.WHITE_SIDE
        case PIECE.WHITE_KNIGHT:
            return SIDE.WHITE_SIDE
        case PIECE.WHITE_ROOK:
            return SIDE.WHITE_SIDE
        case PIECE.BLACK_KING:
            return SIDE.BLACK_SIDE
        case PIECE.BLACK_QUEEN:
            return SIDE.BLACK_SIDE
        case PIECE.BLACK_PAWN:
            return SIDE.BLACK_SIDE
        case PIECE.BLACK_BISHOP:
            return SIDE.BLACK_SIDE
        case PIECE.BLACK_KNIGHT:
            return SIDE.BLACK_SIDE
        case PIECE.BLACK_ROOK:
            return SIDE.BLACK_SIDE
        default:
            throw "getSide - not a piece"
    }
}

/**
 * Returns true if the two pieces at the positions are on the same side.
 * If there are no pieces or if a piece is missing then will return false
 * @param {GameState} board 
 * @param {Position} aPos 
 * @param {Position} bPos 
 */
export const areFriends = (board, aPos, bPos) => {
    let aPiece = getPiece(board, aPos)
    let bPiece = getPiece(board, bPos)
    if(aPiece === null || bPiece === null){
        return false
    }

    if(getSide(aPiece) === getSide(bPiece)){
        return true
    }

    return false
}

/**
 * This function returns a list of unchecked moves that a king can make
 * The checking that takes place is to make sure that the moves are still on the board
 * and that they do not land on a friendly piece
 * @param {GameState} board 
 * @param {Position} curPos 
 */
export const getKingCandidateMoves = (board, curPos) => {
    const offsets = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]]
    let ret = []

    offsets.forEach( curOffset => {
        let newPos = Position(curPos.row + curOffset[0], curPos.col + curOffset[1])
        if(newPos.isOnBoard() && !areFriends(board, curPos, newPos)){
            ret.push(Move(curPos, newPos))
        }
    })
    return ret
}

/**
 * This function returns a copy of the board with the move having been made
 * No validation of the move is done
 * @param {GameState} board 
 * @param {Move} move 
 */
export const makeMove = (board, move) => {
    let boardCopy = cloneDeep(board)

    boardCopy.piecePositions[move.ePos.row][move.ePos.col] = boardCopy.piecePositions[move.sPos.row][move.sPos.col]
    boardCopy.piecePositions[move.sPos.row][move.sPos.col] = null

    boardCopy.movesSoFar = boardCopy.movesSoFar + 1
    boardCopy.whiteIsNext = !boardCopy.whiteIsNext
    boardCopy.moveHistory.push(move)

    //possible add more in the future

    return boardCopy
}

/**
 * Returns the Position of the king of the specified side
 * If no King is found the null is returned
 * @param {GameState} board 
 * @param {SIDE} side 
 */
export const findKingPos = (board, side) => {
    let matchType = (side === SIDE.WHITE_SIDE)? PIECE.WHITE_KING : PIECE.BLACK_KING

    for(let r = 0; r <= 7; r++){
        for(let c = 0; c <= 7; c++){
            if(getPiece(board, Position(r,c)) === matchType){
                return Position(r,c)
            }
        }
    }

    return null
}

/**
 * Returns all of the positions of the pieces on a specified side
 * @param {GameState} board 
 * @param {SIDE} side 
 */
export const getTeamPositions = (board, side) => {
    let ret = []

    return ret 
}

/**
 * Returns candidate moves of the piece at the given position
 * @param {GameState} board 
 * @param {Position} curPos 
 */
export const getCandidateMoves = (board, curPos) => {
    //TODO - getCandidateMoves
    throw "NOT IMPLEMENTED"
}

/**
 * Returns a array of all the candidateMoves of the specified side
 * @param {GameState} board 
 * @param {Side} side 
 */
export const getTeamCandidateMoves = (board, side) => {
    let ret = []

    let teamPositions = getTeamPositions(board, side)
    teamPositions.forEach( pos => {
        let tempPieceMoves = getCandidateMoves(board, pos)
        ret = ret.concat(tempPieceMoves)
    })

    return ret
}

/**
 * This function returns true if the king on the specified side is in check
 * @param {GameState} board 
 * @param {SIDE} side 
 */
export const kingInCheck = (board, side) => {
    let kingPos = findKingPos(board, side)
    let enemySide = (side === SIDE.WHITE_SIDE) ? SIDE.BLACK_SIDE : SIDE.WHITE_SIDE
    let possibleEnemyMoves = getTeamCandidateMoves(board, enemySide)

    possibleEnemyMoves.forEach( move => {
        if(move.ePos === kingPos){ //NOT SURE IF WORKS --> COMPARING CUSTOM CLASSES
            return true
        }
    })

    return false
}

/**
 * This function returns a array of all legal moves that the king can make
 * @param {GameState} board 
 * @param {Position} curPos 
 */
export const getKingMoves = (board, curPos) => {
    //TODO: Implement kingInCheck
    let candidateMoves = getKingCandidateMoves(board, curPos)
    let ret = []

    //when king makes a move he cannot move into an attack
    // candidateMoves.forEach( curMove => {
    //     let tempGameState = makeMove(board, curMove)
    //     if(!kingInCheck(tempGameState, getSide(getPiece(board, curPos)))){
    //         ret.push(curMove)
    //     }
    // })

    return candidateMoves
}

/**
 * Returns all potential moves for the Pawn
 * @param {GameState} board 
 * @param {Position} curPos 
 */
export const getPawnCandidateMoves = (board, curPos) => {
    let offset = (getSide(getPiece(board, curPos)) === SIDE.WHITE_SIDE)? [-1] : [1]
    let ret = []

    if(!isPiece(board, new Position(curPos.row+offset[0], curPos.col))){
        ret.push(new Move(curPos, new Position(curPos.row+offset[0], curPos.col)))
    }

    return ret
}
/**
 * Returns all legal moves for the Pawn
 * @param {GameState} board 
 * @param {Position} curPos 
 */
export const getPawnMoves = (board, curPos) => {
    //TODO - Implement kingInCheck
    let candidateMoves = getPawnCandidateMoves(board, curPos)
    let ret = []

    // candidateMoves.forEach( curMove => {
    //     let tempGameState = makeMove(board, curMove)
    //     if(!kingInCheck(tempGameState, getSide(getPiece(board, curPos)))){
    //         ret.push(curMove)
    //     }
    // })

    return candidateMoves
}

/**
 * Returns candidate moves for the knight
 * This method only check that the move is still on the board
 * and does not land on a friendly piece
 * @param {*} board 
 * @param {*} curPos 
 * @returns {[Move]}
 */
export const getKnightCandidateMoves = (board, curPos) => {
    let offsets = [[-2,-1],[-2,1],[-1,-2],[1,-2],[-1,2],[1,2],[2,-1],[2,1]]
    let ret = []

    offsets.forEach( curOffset => {
        let newPos = new Position(curPos.row + curOffset[0], curPos.col + curOffset[1])
        if(newPos.isOnBoard() && !areFriends(board, curPos, newPos)){
            ret.push(new Move(curPos, newPos))
        }
    })
    return ret
}

/**
 * returns all valid moves for 
 * @param {GameState} board 
 * @param {Position} curPos
 * @returns {[Move]}
 */
export const getKnightMoves = (board, curPos) => {
    //TODO - Implement kingInCheck
    let candidateMoves = getKnightCandidateMoves(board, curPos)
    let ret = []

    // candidateMoves.forEach( curMove => {
    //     let tempGameState = makeMove(board, curMove)
    //     if(!kingInCheck(tempGameState, getSide(getPiece(board, curPos)))){
    //         ret.push(curMove)
    //     }
    // })

    return candidateMoves
}

/**
 * Returns all candidate moves for the Queen
 * @param {GameState} board 
 * @param {Position} curPos 
 * @returns {[Move]}
 */
export const getQueenCandidateMoves = (board, curPos) => {
    let offsets = [[-1,-1],[-1,1],[1,-1],[1,1],[1,0],[-1,0],[0,1],[0,-1]]
    let ret = []

    offsets.forEach( e => {
        let tempPos = new Position(curPos.row + e[0], curPos.col + e[1])
        while(tempPos.isOnBoard()){
            if(!isPiece(board, tempPos)){
                ret.push(new Move(curPos, tempPos))
            }
            else{
                if(!areFriends(board, curPos, tempPos)){
                    ret.push(new Move(curPos, tempPos))
                }
                break;
            }
            tempPos = new Position(tempPos.row + e[0], tempPos.col + e[1])
        }
    })

    return ret
}

/**
 * Returns all legal queen moves
 * @param {GameState} board 
 * @param {Position} curPos
 * @returns {[Move]}
 */
export const getQueenMoves = (board, curPos) => {
    //TODO - Implement getQueenMoves
    let candidateMoves = getQueenCandidateMoves(board, curPos)
    let ret = []

    // candidateMoves.forEach( curMove => {
    //     let tempGameState = makeMove(board, curMove)
    //     if(!kingInCheck(tempGameState, getSide(getPiece(board, curPos)))){
    //         ret.push(curMove)
    //     }
    // })

    return candidateMoves
}

/**
 * Returns all candidate moves for the Bishop
 * @param {GameState} board 
 * @param {Position} curPos 
 * @returns {[Move]}
 */
export const getBishopCandidateMoves = (board, curPos) => {
    let offsets = [[-1,-1],[-1,1],[1,-1],[1,1]]
    let ret = []

    offsets.forEach( e => {
        let tempPos = new Position(curPos.row + e[0], curPos.col + e[1])
        while(tempPos.isOnBoard()){
            if(!isPiece(board, tempPos)){
                ret.push(new Move(curPos, tempPos))
            }
            else{
                if(!areFriends(board, curPos, tempPos)){
                    ret.push(new Move(curPos, tempPos))
                }
                break;
            }
            tempPos = new Position(tempPos.row + e[0], tempPos.col + e[1])
        }
    })

    return ret
}

/**
 * Returns all legal Bishop moves
 * @param {GameState} board 
 * @param {Position} curPos
 * @returns {[Move]}
 */
export const getBishopMoves = (board, curPos) => {
    //TODO - Implement getBishopMoves
    let candidateMoves = getBishopCandidateMoves(board, curPos)
    let ret = []

    // candidateMoves.forEach( curMove => {
    //     let tempGameState = makeMove(board, curMove)
    //     if(!kingInCheck(tempGameState, getSide(getPiece(board, curPos)))){
    //         ret.push(curMove)
    //     }
    // })

    return candidateMoves
}

/**
 * Returns all candidate rook moves
 * @param {GameState} board 
 * @param {Position} curPos
 * @returns {[Move]}
 */
export const getRookCandidateMoves = (board, curPos) => {
    let offsets = [[1,0],[-1,0],[0,1],[0,-1]]
    let ret = []

    offsets.forEach( e => {
        let tempPos = new Position(curPos.row + e[0], curPos.col + e[1])
        while(tempPos.isOnBoard()){
            if(!isPiece(board, tempPos)){
                ret.push(new Move(curPos, tempPos))
            }
            else{
                if(!areFriends(board, curPos, tempPos)){
                    ret.push(new Move(curPos, tempPos))
                }
                break;
            }
            tempPos = new Position(tempPos.row + e[0], tempPos.col + e[1])
        }
    })

    return ret
}

/**
 * Returns all legal Rook moves
 * @param {GameState} board 
 * @param {Position} curPos
 * @returns {[Move]}
 */
export const getRookMoves = (board, curPos) => {
    //TODO - Implement getRookMoves
    let candidateMoves = getRookCandidateMoves(board, curPos)
    let ret = []

    // candidateMoves.forEach( curMove => {
    //     let tempGameState = makeMove(board, curMove)
    //     if(!kingInCheck(tempGameState, getSide(getPiece(board, curPos)))){
    //         ret.push(curMove)
    //     }
    // })

    return candidateMoves
}

/**
 * Checks to see if there is a piece at the given position
 * @param {GameState} board 
 * @param {Postion} curPos
 * @returns {boolean}
 */
export const isPiece = (board, curPos) => {
    if(!curPos.isOnBoard()){
        throw "isPiece - curPos not on board"
    }

    if(getPiece(board, curPos) != null){
        return true
    }
    return false
}