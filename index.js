const userInfo = require('./information');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hi my name is ${userInfo.firstName} ${userInfo.lastName}, ${userInfo.age} years old, and i'm in ${userInfo.campus} campus`,
    e : "oO",
    T : "U "
}));
