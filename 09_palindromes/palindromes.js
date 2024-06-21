function isLetter(charValue){
    if(charValue>=65 && charValue<=90) return true;
    else if(charValue>=97 && charValue<=122) return true;

    return false;
}

const palindromes = function (str) {
    //convert string to an array
    let array =[];
    //const skipChars=[',',';','!',' ','.'];

    for(let i=0;i<str.length;i++){
        if(!isLetter(str.charCodeAt(i))) continue;
        array.push(str[i].toLowerCase());
    }
    //console.log(array);
    for(let i=0;i<Math.floor(array.length/2);++i){
        if(array[i]!=array[array.length-1-i]) return false;
    }
    return true;
};
// Do not edit below this line
module.exports = palindromes;
