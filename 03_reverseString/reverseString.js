const reverseString = function(str) {
    let reversed_string="";
    for(let i=1;i<=str.length;++i) reversed_string+=str.at(-i);
    return reversed_string;
};

// Do not edit below this line
module.exports = reverseString;
