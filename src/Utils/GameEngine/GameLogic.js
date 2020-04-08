import { Move, PIECE, Position, SIDE } from './GameHelpers'
import { GameState } from './GameState'
const cloneDeep = require('lodash/cloneDeep')

/**
 * This a highlevel function that will return a list of Move objects for any piece
 * The list will be parsed to include only valid moves
 * @param {GameState} board 
 * @param {Position} curPos 
 */
export const getPieceMoves = (board, curPos) => {
    let curPiece = getPiece(board, curPos)
    let ret = []

    if(curPiece === null){
        console.log("getPieceMoves - piece not selected")
        return ret
    }

    switch(curPiece){
        case PIECE.WHITE_KING:
            ret = getKingMoves(board, curPos)
            break;
        case PIECE.WHITE_QUEEN:
            ret = getKingMoves(board, curPos)
            break;
        case PIECE.WHITE_PAWN:
            ret = getPawnMoves(board, curPos)
            break;  
        case PIECE.WHITE_BISHOP:
            ret = getKingMoves(board, curPos)
            break;
        case PIECE.WHITE_KNIGHT:
            ret = getKnightMoves(board, curPos)
            break;
        case PIECE.WHITE_ROOK:
            ret = getKingMoves(board, curPos)
            break;  
        case PIECE.BLACK_KING:
            ret = getKingMoves(board, curPos)
            break;
        case PIECE.BLACK_QUEEN:
            ret = getKingMoves(board, curPos)
            break;
        case PIECE.BLACK_PAWN:
            ret = getPawnMoves(board, curPos)
            break;  
        case PIECE.BLACK_BISHOP:
            ret = getKingMoves(board, curPos)
            break;
        case PIECE.BLACK_KNIGHT:
            ret = getKnightMoves(board, curPos)
            break;
        case PIECE.BLACK_ROOK:
            ret = getKingMoves(board, curPos)
            break;
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
    aPiece = getPiece(board, aPos)
    bPiece = getPiece(board, bPos)
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
    let candidateMoves = getKingCandidateMoves(board, curPos)
    ret = []

    //when king makes a move he cannot move into an attack
    candidateMoves.forEach( curMove => {
        let tempGameState = makeMove(board, curMove)
        if(!kingInCheck(tempGameState, getSide(getPiece(board, curPos)))){
            ret.push(curMove)
        }
    })

    return ret
}