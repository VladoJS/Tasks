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
