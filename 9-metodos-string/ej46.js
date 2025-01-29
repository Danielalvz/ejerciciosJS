const userAndPassword = 'pepito2017,12345';
const username = userAndPassword.substring(0, 10);
const password = userAndPassword.substr(11, 5);


console.log(username);
console.log(password);

console.log(`El usuario ${username} tiene ${password} como password`);


