/********全局变量配置********/
let board = []; 



$(document).ready(function() {
    init();
    generateGameCode();
    generateGameCode();
});  

function init() {
    // 面板数组值初始化
    for(let i=0; i<4; i++) {
        board[i] = new Array();
        for(let j=0; j<4; j++) {
            board[i][j] = 0;
        }
    }
};


/**
 * 监听键盘方向键按下的事件
 * 上： 38； 下：40； 左：37； 右：39
 */
$(document).on('keydown', function(event) {
    const keyNum = event.keyCode;
    switch(keyNum) {
        case KEY_LEFT:
            moveLeft();
            break;
        case KEY_UP:
            moveUp();
            break;
        case KEY_RIGHT:
            moveRight();
            break;
        case KEY_DOWN:
            moveDown();
            break;
        default:
            break;
    }
});

/**
 * 在游戏面板的一个空格上随机生成 2或4 的数字
 */
function generateGameCode() {
    let randomX, randomY;
    // 找到面板上还空着的格子
    let availableGrids = [];
    for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
            if(board[i][j] === 0) {
                const coordinate = [i, j];
                availableGrids.push(coordinate);
            }
        }
    }
    // 随机生成2/4
    const randomNum = 2 ** parseInt(Math.random()*2 + 1);

    //随机选择一个空格子
    const length = availableGrids.length;
    const randomGrid = availableGrids[parseInt(Math.random() * length)];
    randomX = randomGrid[0];
    randomY = randomGrid[1];

    // 将随机生成的数字填充到空格子中
    board[randomX][randomY] = randomNum;
    renderGrid(randomX, randomY, randomNum);

    for(let i=0; i<4; i++) {
        console.log(board[i][0]+'*'+board[i][1]+'*'+board[i][2]+'*'+board[i][3]+'*');
        console.log('\n');
    }
}

/**
 * 上移
 */
function moveUp() {
    for(i=0; i<4; i++) {
        for(j=1; j<4; j++) {
            if(board[j][i] !== 0) {
                for(k=0; k<j; k++) {
                    if(board[k][i] === 0 && noVerticalBlocks(k,j,i,board)) {
                        board[k][i] = board[j][i];
                        board[j][i] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    } else if(board[k][i] !== 0 && board[k][i] === board[j][i] && noVerticalBlocks(k,j,i,board)) {
                        board[k][i] += board[j][i];
                        board[j][i] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    }
                }
            }
        }
    }
    generateGameCode();
}

 /**
 * 下移
 */
function moveDown() {
    for(i=0; i<4; i++) {
        for(j=2; j>=0; j--) {
            if(board[j][i] !== 0) {
                for(k=3; k>j; k--) {
                    if(board[k][i] === 0 && noVerticalBlocks(j,k,i,board)) {
                        board[k][i] = board[j][i];
                        board[j][i] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    } else if(board[k][i] !== 0 && board[k][i] === board[j][i] && noVerticalBlocks(j,k,i,board)) {
                        board[k][i] += board[j][i];
                        board[j][i] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    }
                }
            }
        }
    }
    generateGameCode();
}

 /**
 * 左移
 */
function moveLeft() {
    for(i=0; i<4; i++) {
        for(j=1; j<4; j++) {
            if(board[i][j] !== 0) {
                for(k=0; k<j; k++) {
                    if(board[i][k] === 0 && noHorizontalBlocks(k,j,i,board)) {
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    } else if(board[i][k] !== 0 && board[i][k] === board[i][j] && noHorizontalBlocks(k,j,i,board)) {
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    }
                }
            }
        }
    }
    generateGameCode();
}

 /**
 * 右移
 */
function moveRight() {
    for(i=0; i<4; i++) {
        for(j=2; j>=0; j--) {
            if(board[i][j] !== 0) {
                for(k=3; k>j; k--) {
                    if(board[i][k] === 0 && noHorizontalBlocks(j,k,i,board)) {
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    } else if(board[i][k] !== 0 && board[i][k] === board[i][j] && noHorizontalBlocks(j,k,i,board)) {
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    }
                }
            }
        }
    }
    generateGameCode();
}