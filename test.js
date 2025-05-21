export const numbers = [10, 5, 8, 2, 17, -30, -1];

export function findMax(arr) {
    //"НАПИШІТЬ ТУТ ВАШ КОД"
    return Math.max(...arr); 
}

// Функція для знаходження найменшого елемента
export function findMin(arr) {
    //"НАПИШІТЬ ТУТ ВАШ КОД"
    return Math.min(...arr); 
}

// Використання функцій для знаходження найбільшого і найменшого елементів
const max = findMax(numbers);
const min = findMin(numbers);

console.log("Найбільший елемент: " + max);
console.log("Найменший елемент: " + min);