function userInput() {
var Num1 = parseFloat(prompt("Number 1: "));
var Opr = prompt("Choose Operator: +, -, /, *, %");
var Num2 = parseFloat(prompt("Number 2: "));
var result = 0;

if(Opr === "+")
{
    result = (Num1 + Num2);
}
else if(Opr === "-")
{
    result = (Num1 - Num2);
}
else if(Opr === "/")
{
    result = (Num1 / Num2);
}
else if(Opr === "*")
{
    result = (Num1 * Num2);
}
else if(Opr === "%")
{
    result = (Num1 % Num2);
}
else{
    alert('Invalid input, please try again')
}
alert(result);
}
userInput();