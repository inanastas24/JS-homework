// function hidePhoneNumbers(text) {
//     // напишіть ваш код тут
//     const phone = Array.from(text); 
//     const slicedOparation = text.slice(0, 3); 
//     const slicedTel = text.slice(3, 6); 
//     const slicedTelEnd = text.slice(6, 10); 
//     const separator = '-';
     
//     var re = /^\d{3}-\d{3}-\d{4}$/
//     const result = [...slicedOparation, separator, ...slicedTel, separator, ...slicedTelEnd];
//     var res = result.replace(re, "XXX-XXX-XXXX")

//     console.log(slicedOparation)
//     console.log(slicedTel)
//     console.log(slicedTelEnd)
//     console.log('Новий формат телефону:', res.join(''))
//   }
//   export default hidePhoneNumbers;
//   const text = '380991222222';
//   hidePhoneNumbers(text);

function hidePhoneNumbers(text) {
    // напишіть ваш код тут
    
    return text.replace(/\d{3}(\d{3})(\d{4})/g, 'XXX-XXX-XXXX');
    
  }
  export default hidePhoneNumbers;
  const text = '0991222222';
  console.log(hidePhoneNumbers(text));