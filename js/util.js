function noHorizontalBlocks(fromX, fromY, ordinate, board) {
    for(let i=fromX+1; i<fromY; i++) {
        if(board[ordinate][i] > 0) {
            return false;
        }
    }
    return true;
}

function noVerticalBlocks(fromX, fromY, abscissa, board) {
    for(let i=fromX+1; i<fromY; i++) {
        if(board[i][abscissa] > 0) {
            return false;
        }
    }
    return true;
}