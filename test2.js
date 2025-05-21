// Напишіть regex, котрий знайде cat та can, але не знайде car

var text = 'cat car can';

//const reg = /cat|can/
const reg = /\bca[tn]\b/g
console.log(reg.test(text))



// Напишіть regex, котрий знайде ВСІ слова котрі починаются на h

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
const regul = /\bh\w*/gi