// Task 1 
function makePlusFunction(a){
    return function(b){
        return a + b
    }
}
const plusFive = makePlusFunction(5);
console.log(plusFive(3));

// task 2 (4)
function product(a1,b1){
    return function(a2,b2){
        return function(a3,b3){
            return a1*a2*a3 + b1*b2*b3
        }
    }
}
console.log(product(10,2)(5,0)(2,3));//-> 100

// task 3 (14)

function multiply(num1,num2){
    if(num2===0){
        return 0
    }
        return num1 + multiply(Math.abs(num1), Math.abs(num2-1))
   
}

console.log(multiply(10,2)); //-> 20
console.log(multiply(-51,-4)); //-> 204

