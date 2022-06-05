//solução 1
/*
function isPalindrome(str) {
if(!str) return;

let pali = str.split("").reverse().join("")

console.log(pali)

if(pali == str) {
    return `A palavra ${str} é um palindromo`
} else {
    return `A palavra ${str} não é um palindromo`
}

}

console.log(isPalindrome("romor")) */

//solução 2

function isPalindrome(str) {
    if(!str) return "insira string valida";

    for (let i=0;i<str.length/2;i++) {
        if (str[i] !== str[str.length-1-i]) {
            return false;
        }
    }

    return true
}

console.log(isPalindrome("roma"))