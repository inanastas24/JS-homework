
let result = true;

function powerOfNumber(number = 5, power = 3) {
  
    result = Math.pow(number, power)
}

powerOfNumber(); // Виклик функції без аргументів
console.log(result);
