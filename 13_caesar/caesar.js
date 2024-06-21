const caesar = function(str,shift) {
    let cipheredStr='';;

    for(let i=0;i<str.length;++i){
        if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122)
            cipheredStr+=String.fromCharCode(((str.charCodeAt(i)-97+shift)%26+26)%26+97);
        else if(str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90)
            cipheredStr+=String.fromCharCode(((str.charCodeAt(i)-65+shift)%26+26)%26+65);
        else cipheredStr+=str[i];
    }

    return cipheredStr;
};
// Do not edit below this line
module.exports = caesar;

