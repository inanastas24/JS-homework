function extractWords(text) {
    // Використовуємо регулярний вираз для отримання всіх слів
    const wordsArray = text.match(/\b\w+\b/g) || [];
    
    console.log('Массив слов:', wordsArray);
    return wordsArray;
}

export default extractWords;

// Приклад використання:
const text = "My first text in this task! And 2 word";
extractWords(text);