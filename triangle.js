//2. Створити програму,
// яка виведе в консоль трикутник із символу *, висота якого задається користувачем (n).

function triangle(n, symbol = '*') {
    for  (let i = 0; i <= n; i ++){
       
        console.log(symbol.repeat(i))
    }
}
triangle(5 , '*')