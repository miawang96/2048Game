function noHorizontalBlocks(fromX, fromY, ordinate, panel) {
    for(let i=fromX+1; i<fromY; i++) {
        if(panel[ordinate][i] > 0) {
            return false;
        }
    }
    return true;
}

function noVerticalBlocks(fromX, fromY, abscissa, panel) {
    for(let i=fromX+1; i<fromY; i++) {
        if(panel[i][abscissa] > 0) {
            return false;
        }
    }
    return true;
}

function getLeftPosition(i) {
    return 18 + (132 + 24) * i;
}

function getTopPosition(j) {
    return 18 + (132 + 18) * j;
}