// Створити метод price(), який обчислює та повертає загальну вартість наданих послуг.
// Створити метод minPrice(), який повертає мінімальну ціну.
// Створити метод maxPrice(), який повертає максимальну ціну.


var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    "запис": "онлайн",

    price() {
        let total = 0;
        
        for (let service in this) { // Перебираємо всі властивості об'єкта
          if (typeof this[service] === 'string' && this[service].includes('грн')) {
            const price = parseFloat(this[service]); // Виділяємо числове значення ціни
                total += price;   // Додаємо до загальної суми
          }
        }
        
        return total.toFixed(2) + ' грн';
      },

      minPrice() {
            let min = Infinity;
            for (let service in this) {
                if (typeof this[service] === 'string' && this[service].includes('грн')) {
                    const price = parseFloat(this[service]);
                    min = Math.min(min, price);
            }

      }
      return min;
    },

    maxPrice() {
        let max = -Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string' && this[service].includes('грн')) {
                const price = parseFloat(this[service]);
                max = Math.max(max, price);
        }

  }
  return max;
}
};


    services['Розбити скло'] = "200.78 грн";
    services['Кава'] = "49.99 грн";

    console.log(services.price())
    console.log(services.minPrice())
    console.log(services.maxPrice())