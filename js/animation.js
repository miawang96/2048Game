function renderGrid(randomX, randomY, randomNum) {
    // 设置表格背景色, innerText, 以及数字对应的颜色
    $('#grid_'+randomX+'_'+randomY).css('backgroundColor',numberGrid[randomNum].bgColor);
    $('#grid_'+randomX+'_'+randomY).css('color',numberGrid[randomNum].fontColor);
    $('#grid_'+randomX+'_'+randomY).text(randomNum);
}