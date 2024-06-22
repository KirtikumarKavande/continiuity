const isPalindrome = (str) => {
  if (str.length <= 1) return true;

  if (str[0] === str[str.length - 1]) {
   return isPalindrome(str.substring(1, str.length - 1));
  }else{
    return false
  }
};
let str = "madam";
console.log(isPalindrome(str));
