
// Перший варіант залишу. Прочитала завдання, але зрозуміла по-своєму його

/*function powerOfNumber(number = 5, power = 3) {
  
    result = Math.pow(number, power)
}

powerOfNumber(); // Виклик функції без аргументів
console.log(result);
*/

//______________________________________________________________//

// Другий варіант, де не використовуємо вбудовані функції і **
function pow(x, y) {
    
    let result = 1; // Початкове значення результату
  
    // Множимо result на x y разів
    for (let i = 1; i <= y; i++) {
      result *= x;
    }
  
    console.log(result); // Повертаємо результат
  }

 pow(2, 4);
