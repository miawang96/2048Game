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

function getLeftPosition(j) {
    return PANEL_MARGIN + (GRID_CELL_WIDTH + X_GAP) * j;
}

function getTopPosition(i) {
    return PANEL_MARGIN + (GRID_CELL_WIDTH + Y_GAP) * i;
}

function canMoveLeft(panel) {
    for(let i=0; i<4; i++) {
        for(let j=3; j>0; j--) {
            if(panel[i][j] > 0) {
                for(let k=j-1; k>=0; k--) {
                    if(panel[i][k] === 0 || (noHorizontalBlocks(k,j,i,panel) && panel[i][k] === panel[i][j])) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function canMoveRight(panel) {
    for(let i=0; i<4; i++) {
        for(let j=0; j<3; j++) {
            if(panel[i][j] > 0) {
                for(let k=j+1; k<4; k++) {
                    if(panel[i][k] === 0 || (noHorizontalBlocks(j,k,i,panel) && panel[i][k] === panel[i][j])) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function canMoveUp(panel) {
    for(let i=0; i<4; i++) {
        for(let j=3; j>0; j--) {
            if(panel[j][i] > 0) {
                for(let k=j-1; k>=0; k--) {
                    if(panel[k][i] === 0 || (noVerticalBlocks(k,j,i,panel) && panel[k][i] === panel[j][i])) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function canMoveDown(panel) {
    for(let i=0; i<4; i++) {
        for(let j=0; j<3; j++) {
            if(panel[j][i] > 0) {
                for(let k=j+1; k<4; k++) {
                    if(panel[k][i] === 0 || (noVerticalBlocks(j,k,i,panel) && panel[k][i] === panel[j][i])) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}