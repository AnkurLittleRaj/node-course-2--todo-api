const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
var data = {
    id:10
};
var token =jwt.sign(data,'123abc');
console.log(token);

 var decoded = jwt.verify(token,'123abc');
 console.log(decoded);
// var message = "Hello i am number 3";
// var hash = SHA256(message).toString();
// console.log(`message is ${message}`);
// console.log(`Hash message is ${hash}`);
// var data = {
//     id: 4
// };
// var token ={
//     data,
//     hash : SHA256(JSON.stringify(data)+'somesecret').toString()
// };
// var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();

// if(resultHash === token.hash){
//     console.log('its good');
// }
// else{
//     console.log('data is different');
// }