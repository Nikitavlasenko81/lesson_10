//task_1
function isEmpty(obj){
    for (let key in obj){
        return true;
    }
    return false;
}
console.log(isEmpty({}));


//task_2
let obj = {
    "string":"foo",
    "number": 2,
}

function multiplyNumeric(obj){
    for (let key in obj){
        if(typeof obj[key] == "number"){
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(obj)
console.log(obj)

//task_3
function readNumber(){
    let num
    do {
         num = prompt('enter number')
    }while (!isFinite(num)){
        if(num === null || num === "" ){
            return null
        }else{
            return num;
        }
    }
}
// console.log(readNumber())

//task_4
function random(min, max) {
    return min + Math.random() * (max - min);
}
console.log(random(1,5))

//task_5
function randomInteger(min, max){
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num)
}
console.log( randomInteger(1, 5) );

//task_6
function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1);
}
//console.log(ucFirst("вася"))

//task_7
function checkSpam(str) {
   if(str.toLowerCase().includes('xxx')|| str.toLowerCase().includes('viagra')){
       return true;
   }
   return false
}
// console.log(checkSpam('buy ViAgRA now'))
// console.log(checkSpam('free xxxxx'))
// console.log(checkSpam("innocent rabbit"))

// task_8
function truncate(str, maxlength){
    if(str.length >= maxlength){
         return `${str.slice(0,maxlength-1)}...`;
    }
    return str;
}
//console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

// task_9
function extractCurrencyValue(str) {
    let num = ''
    for (let char of str) {
        num += isFinite(char) ? char : ''
    }
    return +num
}
//alert( extractCurrencyValue('$120') === 120 );

// task_10
function sumInput() {
    let numArr = [];
    for(;true;){
        let value = prompt('введите число');
        if (value === "" || value === null || !isFinite(value)){
            break
        }else{
            numArr.push(+value);
        }
    }
    let sum = 0;
    for(let el of numArr){
        sum += el;
    }
    return sum
}
//console.log(sumInput())

//task_11
function getMaxSubSum(arr) {
    let maxSum = 0;
    let sumPart = 0;
    for (let item of arr) {
        sumPart += item;
        maxSum = Math.max(maxSum, sumPart);
        if (sumPart < 0) sumPart = 0;
    }
    return maxSum;
}
//getMaxSubSum([2, -1, 2, 3, -9])

//task_12
//раздници нет, оба варианта работают одинаково

//task_13
function checkAge(age) {
   return (age > 18) ? true : confirm('Родители разрешили?');
    return (age > 18) || confirm('Родители разрешили?');
}

//task_14
function min(a,b){
    if(a>b){
        return b
    }
    return b
}
//console.log(min(a,b))

//task_15
function pow(x,n){
    let res = x;
    for(let i = 1; i < n; i++){
        res *= x;
    }
    return res;
}
// console.log(pow(8,5))

//task_16
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () =>  alert("Вы отменили выполнение.")
// );

//task_17
let Task_17 = () => Math.floor(8000 / (3333- 1750))
//console.log(`${Task_17()} месяцев`)

//task_18
function task_18(){
    let num
    let sum = 0;
    for (let i = 0; i < 10; i++){
        num = +prompt('введите число')
        if(num < 0){
            sum += num;
        }
    }
    return sum
}
//console.log(task_18())









