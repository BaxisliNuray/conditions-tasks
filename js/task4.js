let rev = 0;
let num = 1234;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num/10); //Math.floor reqemi yuvarlaqlasdirir amma asagiya dogru 
}

console.log(rev);