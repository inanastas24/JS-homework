
// ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
// За допомогою регулярного виразу створіть масив з адресами, гідними довіри. 
//Постарайтеся також зробити просту валідацію до @
// одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.


function paranoia(emails) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/i;
    return emails.filter(email => emailRegex.test(email));
}

var emailList = [
    "test.test1@gmail.com", 
    "dmitro.porohov@yahoo.com>", 
    "andrii@mail.ru",
    "dmitro.porohov@com",
    "test_one+1test-5@gmail.com"
]
const trustedEmails = paranoia(emailList);
console.log(trustedEmails);