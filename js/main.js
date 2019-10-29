/********全局变量配置********/
let panel = []; 



$(document).ready(function() {
    init();
    
});  

function init() {
    // 面板数组值初始化
    for(let i=0; i<4; i++) {
        panel[i] = new Array();
        for(let j=0; j<4; j++) {
            panel[i][j] = 0;
        }
    }

    generateGameCode();
    generateGameCode();

    updatePanelView();
};


function updatePanelView() {
    // 生成覆盖在面板上的数字格子
    // 获取每个格子的绝对定位
    // 更新每个数字格子的数值
    for(let i=0; i<4; i++) {
        for(let j=0; j<4; j++) {
            $('.game-box').append('<div class="number_cell" id=number_'+i+'_'+j+'></div>');
                $('#number_'+i+'_'+j).css({
                    'left': getLeftPosition(i) + 'px',
                    'top': getTopPosition(j) + 'px',
                    'backgroundColor': numberGrid[panel[i][j]].bgColor,
                    'color': numberGrid[panel[i][j]].fontColor,
                    'border': '1px solid ' + numberGrid[panel[i][j]].bgColor,
                })
            $('#number_'+i+'_'+j).text(panel[i][j]);
        }
    }
}

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
            if(panel[i][j] === 0) {
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
    panel[randomX][randomY] = randomNum;
    renderGrid(randomX, randomY, randomNum);

    for(let i=0; i<4; i++) {
        console.log(panel[i][0]+'*'+panel[i][1]+'*'+panel[i][2]+'*'+panel[i][3]+'*');
        console.log('\n');
    }
}

/**
 * 上移
 */
function moveUp() {
    for(i=0; i<4; i++) {
        for(j=1; j<4; j++) {
            if(panel[j][i] !== 0) {
                for(k=0; k<j; k++) {
                    if(panel[k][i] === 0 && noVerticalBlocks(k,j,i,panel)) {
                        panel[k][i] = panel[j][i];
                        panel[j][i] = 0;
                        // 面板上移动方块
                        renderSlideAnimation(i,j,i,k);
                    } else if(panel[k][i] !== 0 && panel[k][i] === panel[j][i] && noVerticalBlocks(k,j,i,panel)) {
                        panel[k][i] += panel[j][i];
                        panel[j][i] = 0;
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
            if(panel[j][i] !== 0) {
                for(k=3; k>j; k--) {
                    if(panel[k][i] === 0 && noVerticalBlocks(j,k,i,panel)) {
                        panel[k][i] = panel[j][i];
                        panel[j][i] = 0;
                        // 面板上移动方块
                        renderSlideAnimation(j,i,k,i);
                    } else if(panel[k][i] !== 0 && panel[k][i] === panel[j][i] && noVerticalBlocks(j,k,i,panel)) {
                        panel[k][i] += panel[j][i];
                        panel[j][i] = 0;
                        // 面板上移动方块
                        renderSlideAnimation(j,i,k,i);
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
            if(panel[i][j] !== 0) {
                for(k=0; k<j; k++) {
                    if(panel[i][k] === 0 && noHorizontalBlocks(k,j,i,panel)) {
                        panel[i][k] = panel[i][j];
                        panel[i][j] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    } else if(panel[i][k] !== 0 && panel[i][k] === panel[i][j] && noHorizontalBlocks(k,j,i,panel)) {
                        panel[i][k] += panel[i][j];
                        panel[i][j] = 0;
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
            if(panel[i][j] !== 0) {
                for(k=3; k>j; k--) {
                    if(panel[i][k] === 0 && noHorizontalBlocks(j,k,i,panel)) {
                        panel[i][k] = panel[i][j];
                        panel[i][j] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    } else if(panel[i][k] !== 0 && panel[i][k] === panel[i][j] && noHorizontalBlocks(j,k,i,panel)) {
                        panel[i][k] += panel[i][j];
                        panel[i][j] = 0;
                        // 面板上移动方块
                        // renderSlideAnimation();
                    }
                }
            }
        }
    }
    generateGameCode();
}