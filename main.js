//найти и вывести факториал числа
function factorial (x) {
    if (x==1) return x;
    return x*factorial (x-1);
}
let userNumber = 5//+prompt ("Введите число");
document.getElementById ("app1").innerHTML = `Факториал числа <b>${userNumber}</b> равен <b>${factorial(userNumber)}</b>`;

function lineNumber (firstNumber, lastNumber) {
    if (firstNumber===lastNumber) return firstNumber;
    return firstNumber + ', ' +lineNumber (firstNumber+1, lastNumber)
}
let startNumber = 5//+prompt ("Введите начальное число диапазона");
let finishNumber = 12//+prompt ("Введите конечное число диапазона");
document.getElementById ("app2").innerHTML = `Все числа диапазона <i>${startNumber}, ${finishNumber}</i>: равен <i>${lineNumber(startNumber, finishNumber)}</i>`;

function revNumber (firstNumber, lastNumber) {
    if (firstNumber===lastNumber) return firstNumber;
    return lastNumber + ', ' + revNumber (firstNumber, lastNumber-1);
}
//let startNumber = +prompt ("Введите начальное число диапазона");
//let finishNumber = +prompt ("Введите конечное число диапазона");
document.getElementById ("app3").innerHTML = `Все числа диапазона <i>${startNumber}, ${finishNumber}</i>: равен <i>${revNumber(startNumber, finishNumber)}</i>`;

function reverseNumber (num, rez=0) {
    if (num===0) return rez;
    return reverseNumber(Math.floor (num/10), rez*10+num%10);
}
let number = 125//+prompt ('Введите многозначное число')
document.getElementById ("app4").innerHTML = `Число, обратное числу ${number} - это ${reverseNumber(number)}`
reverseNumber(number);
function sumNumber (num) {
    if (num<10) return num;
    return sumNumber(Math.floor (num/10))+num%10;
}
document.getElementById ("app5").innerHTML = `Сумма числ числа ${number}- это ${sumNumber(number)}`;
function symbNumber (n) {
    if (n===1) return '()';
    return '(' + symbNumber (n-1) + ')';
}
let v= +prompt ("Введите число");
document.getElementById ("app6").innerHTML = `Числу ${v} соответствует ${symbNumber(v)}`