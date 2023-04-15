// task 1
function sumTwoNumber(a, b) {
  return a + b;
}

console.log(sumTwoNumber(4, 4)); //-> 8;

// task 2
function maxOfNumber(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maxOfNumber(20, 3, 25)); //-> 25

// task 3
function sum(a) {
  let dig1 = a % 10;
  let dig = Math.floor(a / 10);
  let dig2 = dig % 10;
  let dig3 = Math.floor(dig / 10);
  return dig1 + dig2 + dig3;
}

console.log(sum(179)); //-> 17

// task 4
function endNine(n) {
  return n % 10 === 9 ? "Yes" : "No";
}

console.log(endNine(12)); //-> No

// task 5
function century(y) {
  return Math.ceil(y / 100);
}

console.log(century(1900));

// task 6
function convert(m) {
  return m * 60;
}

console.log(convert(5)); //-> 300

// task 7
function calcAge(age) {
  return age * 365;
}

console.log(calcAge(20)); //->7300

//task 8
function findPerimeter(a, b) {
  return (a + b) * 2;
}

console.log(findPerimeter(2, 9)); // -> 22

// task 9
function lessThan100(num1, num2) {
  let sum = num1 + num2;
  return sum < 100;
}

console.log(lessThan100(50, 10)); //-> false

// task 10
function addUp(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(addUp(13)); //-> 91

// task 11
function equal(a, b, c) {
  if (a === b && c === a) return 3;
  else if (a !== b && c !== a) return 0;
  else return 2;
}

console.log(equal(1, 1, 3)); // -> 2

// task 12
function isSummeetrica(n) {
  let pol = n;
  let polrev = 0;
  while (n > 0) {
    let m = n % 10;
    n = Math.floor(n / 10);
    polrev += m;
    polrev *= 10;
  }
  return pol === Math.floor(polrev / 10) ? true : false;
};
console.log(isSummeetrica(7227));


// task 13
function Prime(a) {
  let res = 0;
  for (let i = 2; i <= a; i++) {
    let cnt = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt == 2) {
      res++;
    }
  }
  return res;
}

console.log(Prime(10)); // -> 4

// task 14
function pow(x,n){
  return Math.pow(x,n);
}

console.log(pow(2,-2)); //->0.25
