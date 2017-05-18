var ValueDom = document.getElementById('screen'); // 界面DOM
var Value = []; //值
var State = ""; // 状态
var signal = ""; // 符号
// 减少
function clearFunction() {
    console.log('clearFunction')
}
// 清空
function cleanFunction () {
    console.log('cleanFunction')
}
// 减位
function cutFunction () {
    console.log('cutFunction')
}
// 符号操作
function signalFunction (optionType) {
    console.log(optionType)    
}
// 数字操作
function numFunction (num) {
    console.log(num)    
}
// 修改数字正负值
function stateFunction () {
    console.log('stateFunction')    
}
// 小数
function pointFunction () {
    console.log('pointFunction')    
}
// 结果
function resultFunction () {
    console.log('resultFunction')    
}