// create a palindrome check function
// example: noon,  deed, deified
// 1:
function isPalindrome(str) {
    let arr = str.split('');
    let revArr = arr.reverse();
    let resStr = revArr.join('');
    let res = str === resStr;
    return res;
}
console.log(isPalindrome('noon'));
console.log(isPalindrome('moon'));

// 2:
const isPalindromeTwo = str =>
    str === str.split('').reverse().join('');

console.log(isPalindromeTwo('moon'));
console.log(isPalindromeTwo('defined'));


// find short 
// 1:
function findShort(str) {
    let wordsArr = str.split(' ');
    let sortWordsArr = wordsArr.sort(function(a, b) {
        return a.length - b.length;
    });
    return sortWordsArr[0];
}
console.log(findShort('Сould you tell me about yourself?'));


// 2:
const findShortWord = str =>
  str
    .split(' ')
    .sort((a, b) => a.length - b.length)[0];

console.log(findShortWord('How are you doing'));


// initials creation function
// 1:
function toInitials(name) {
    let nameArr = name.split(' ');
    let firstLettersArr = nameArr.map(function(el) {
        return el.slice(0, 1).toUpperCase() + '.';
    });
    let initials = firstLettersArr.join('');
    return initials;
}

console.log(toInitials('Vlad Pete'));

// 2:
const toInitialsTwo = name =>
name
    .split(' ')
    .map(el => `${el.slice(0, 1).toUpperCase()}.`)
    .join('');

console.log(toInitialsTwo('Bob Dealan'));


// the function of summing all the digits of a number
// 1:
function sumDigits(number) {
    let moduleNumber = Math.abs(number);
    let str = moduleNumber.toString();
    let arr = str.split('');
    let res = arr.reduce(function(sum, cur) {
        return Number(sum) + Number(cur);
    }, 0);
    return res;
}

console.log(sumDigits(88));

// 2:
const sumDigitsAll = number =>
    Math.abs(number)
        .toString()
        .split('')
        .reduce((sum, cur) => +sum + +cur, 0);

console.log(sumDigitsAll(1504));

// 3:
function sumDigits(num) {
    return String(num)
        .split('')
        .map(el => Number(el))
        .filter(Boolean)
        .reduce((sum, cur) => sum + cur, 0);
}

console.log(sumDigits(99));



// Search for min and max values in an array
// 1:
function minMax(arr) {
    let res = [];
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    return res.push(minValue, maxValue);
}
console.log(minMax([10, 29, 300, 1000]));

// 2
const minMaxValues = (arr) =>
    [Math.min(...arr), Math.max(...arr)];

console.log(minMaxValues([2, 10, 100, 200]));