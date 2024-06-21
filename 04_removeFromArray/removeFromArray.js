const removeFromArray = function (array, ...ignore_items) {
    const new_array = [];
    for (let i = 0; i < array.length; ++i) {
        if (ignore_items.includes(array[i])) continue;
        new_array.push(array[i]);
    }
    return new_array;
};

// Do not edit below this line
module.exports = removeFromArray;
