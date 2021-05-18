const isPrime = function(num) {
    let i = 2;

    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        ++i;
    }
    return true;
}

const sumOfNPrimes = function (n) {
    if (n === 0) { return 0; }
    if (n === 1) { return 2; }

    let sum = 0;
    let currentNprime = 0;

    for(i = 2; currentNprime < n; i++) {
        if (isPrime(i)) {
            sum += i;
            currentNprime++;
        }
    }
    return sum;
}

console.log(sumOfNPrimes(4));
