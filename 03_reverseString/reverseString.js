const reverseString = function(string) {
    let s = String(string);
    let newString = "";

    for (c = s.length - 1; c >= 0; c--)
    {
        newString = newString.concat(s[c]);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
