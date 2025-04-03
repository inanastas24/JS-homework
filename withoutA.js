// Опис ДЗ: Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, 
//які не містять літери «А» (великої або малої)

// Приклад виконання:
// Повинен знаходити: Wonderful, Joyful
// Не повинен знаходити: Happiness, Time, Task, Apple

function withOutA(text) {

    const re = /\b[b-zB-Z]{6,}\b/g;
    const res = text.match(re)
    return res;
}

const text = 'Wonderful, Joyful, Happiness, Time, Task, Apple';
console.log(withOutA(text));