const repeatString = function(str,num) {
    if(num<0) return "ERROR";
    
    let repeatedStr='';
    for(let i=1;i<=num;i++) repeatedStr+=str;

    return repeatedStr;
};

// Do not edit below this line
module.exports = repeatString;
