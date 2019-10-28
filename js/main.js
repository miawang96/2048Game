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
            console.log(numberGrid[2].color)
            break;
        case KEY_UP:
            console.log('up')
            break;
        case KEY_RIGHT:
            console.log('right')
            break;
        case KEY_RIGHT:
            console.log('down')
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

    console.log(board[randomX][randomY]);

    // 单元格渲染
    renderGrid(randomX, randomY, randomNum);
}