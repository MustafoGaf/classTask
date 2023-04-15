// recursion 
// task 1 
function sum(n){
    if(n==1){
        return 1
    }
    return n + sum(n-1)
}

console.log(sum(12)); //-> 78
// task 2

function factorial(n){
    if(n==1){
        return 1;
    }
    return n * factorial(n-1)
}

console.log(factorial(1)); //->1

// task 3 (6)
function sumDigit(n){
    if(n==0){
        return 0
    }
    return n%10 + sumDigit(Math.floor(n/10))
}

console.log(sumDigit(222)); //-> 6

// task 4 (3)
function doubleFactorial(n){
    if(n<=1){
        return 1;
    }
    return n * doubleFactorial(n-2)
}

console.log(doubleFactorial(9)); //-> 945

// task 5 (2)

function Fibonacci(n) {
    if(n<=1){
        return 1
    }
    return (Fibonacci(n-2)+ Fibonacci(n-1))
}

console.log(Fibonacci(5));  //-> 8

