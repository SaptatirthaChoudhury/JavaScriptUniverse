function palindrome(str, start, last) {
    if (start >= last) {
        return true;
    }
    if (str[start] == str[last]) {
        return palindrome(str, start + 1, last - 1);
    }
    else {
        return false;
    }

}

let str = "MADAM"
let len = str.length;
let check = palindrome(str, 0, len - 1);
if (check) {
    console.log(`${str} is palindrome`);
}
else {
    console.log(`${str} is not palindrome`);
}
