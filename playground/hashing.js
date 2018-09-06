const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var password = '123abc!';
// bcrypt.genSalt(10,(err,salt)=>{
//     bcrypt.hash(password,salt,(err,hash)=>{
//         console.log(hash);
//     })
// });

var hashedpwd = '$2a$10$hOCzAjnK3Lhr0RPePU4ZheJCPn0/xDEigF7yUOKNaB0v2/kSCPpRq';
bcrypt.compare(password,hashedpwd,(err,res)=>{
    console.log(res);
})
//  
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