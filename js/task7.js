var num1 = 3;
var num2 = 55;
var symbol = "%"
switch (symbol) {
    case "*":
        console.log(num1 * num2);
        break;
    case "+":
        console.log(num1 + num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;

    default:
        console.log("invalid input");
        break;
}