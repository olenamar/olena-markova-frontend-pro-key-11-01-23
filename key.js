const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters){
    let key = '';
    for (let i = 0; i < length; i++){
        let generateNumber = Math.floor(Math.random() * (characters.length));
        key += characters[generateNumber];
    }
    return key;
}
console.log(generateKey(16, characters));