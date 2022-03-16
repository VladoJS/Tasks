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