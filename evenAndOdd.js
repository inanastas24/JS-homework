// Напишіть функцію яка буде генерувати певну кількість 
// випадкових чисел в діапазоні від 100 до 1000 включно. Порахувати кількість парних та
//  непарних серед них. Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? 
//  Приклад функції checkProbabilityTheory(count). Парметр count буде вказувати скільки разів буде 
//  генеруватися випадкове число.

function random(min, max) {
    if (max < min) {
        console.log("max менше min")
        return
    }
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    
}

function checkProbabilityTheory(count) {
    let even = 0
    let odd = 0
    for (let i = 0; i < count; ++i) {
        let randomNumber = random(100, 1000) 
    console.log (randomNumber)
        if (randomNumber % 2 == 0) {
            ++even
        } else {
            ++odd
        }
    }

    console.log( even/count *100 , odd/count *100)
 }

 checkProbabilityTheory(5)


 