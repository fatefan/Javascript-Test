var ValueDom = document.getElementById('screen'); // 界面DOM
var Value = []; //值
var State = ""; // 状态
var Signal = ""; // 符号
// 减少
function clearFunction() {
    ValueDom.innerHTML = '0';
    State = '';
}
// 清空
function cleanFunction () {
    ValueDom.innerHTML = '0';
    Value = [];
    Singal = '';
    State = '';
}
// 减位
function cutFunction () {
    let value = ValueDom.innerHTML;
    if(value == '0') {
        return
    } else if (value.length == 1) {
        ValueDom.innerHTML = '0';
    } else  {
        ValueDom.innerHTML = value.slice(0,-1);
    }
}
// 符号操作
function signalFunction (optionType) {
    if(ValueDom.innerHTML == '0') return;
    Value[0]=(ValueDom.innerHTML);
    ValueDom.innerHTML = '0';
    Signal = optionType; 
    State = '';          
}
// 数字操作
function numFunction (num) {
    let newValue;
    if(ValueDom.innerHTML == '0') {
         newValue = num;
    } else if (ValueDom.innerHTML != '0') {
        newValue = ValueDom.innerHTML + num;      
    }
    ValueDom.innerHTML = newValue; 
}
// 修改数字正负值
function stateFunction () {
    if(State == '') {
        ValueDom.innerHTML = '-'+ValueDom.innerHTML;
        State = '-';
    } else if (State == '-') {
        ValueDom.innerHTML = ValueDom.innerHTML.slice(1);
        State = '';
    }
}
// 小数
function pointFunction () {
    ValueDom.innerHTML = ValueDom.innerHTML + '.';    
}
// 结果
function resultFunction () {
    if(Value.length == 0 || Signal =='' ||ValueDom.innerHTML == '0') return;
    let result = calc(parseFloat(Value[0]),parseFloat(ValueDom.innerHTML),Signal);
    if(result < 0) State = '-';
    ValueDom.innerHTML = result;    
}
// 计算
function calc (value1,value2,optionType) {
    let result;
    switch (optionType) {
        case '+':
            result = parseFloat((value1*1000 + value2*1000)/1000);
            break;
        case '-':
            result = parseFloat((value1*1000 - value2*1000)/1000);
            break;            
        case '%':
            result = value1/value2;
            break;            
        case 'x':
            result = value1*value2;
            break;            
    }
    return result;
}
