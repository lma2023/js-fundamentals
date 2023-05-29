function isOdd(num) {
    if (num % 2 == 1) {
        return true;
    } else {
        return false;
    }
}

let numbers = [3, 15, 8];
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
