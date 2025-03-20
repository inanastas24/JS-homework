// 1. Вивести суму всіх чисел від 1 до 1000

let summ = 0;
function sum(n) {
    for (let i = 0; i <= n; i ++){
        summ = summ + i;
        console.log(" i =" +i)
    }
}
sum(1000)
console.log("Сума усіх чисел " + summ)