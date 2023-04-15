// task 1
function add_suffix(str1) {
  return function (str2) {
    return str2 + str1;
  };
}

let add_ly = add_suffix("ly");
console.log(add_ly("hopeless"));

// task 2
function add(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

console.log(add(10)(20));

// task 3
function addsNum(num1) {
  return function (num2) {
    return num1 + num2;
  };
}

let adds10 = addsNum(10);
console.log(adds10(15.5));

// task 4
function redundant(str) {
  return function () {
    return str;
  };
}

const f1 = redundant("apple");
console.log(f1());

// Recursion
// task 5
function pow(x, n) {
  if (n == 0) {
    return 1;
  }
  return x * pow(x, n - 1);
}

console.log(pow(2, 4));

// task 7
function length(str, ln = 0) {
  if (str[ln] == undefined) {
    return ln;
  }
  return length(str, ln + 1);
}

console.log(length("n"));

// task 7

function is_even_recursion(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  }
  return is_even_recursion(n - 2);
}

console.log(is_even_recursion(10));

// task 8
function multiSum(a, n = 10) {
  let sum = a * n;
  if (n == 0) {
    return 0;
  }
  return sum + multiSum(a, n - 1);
}
console.log(multiSum(1));

// task 9

function gcd(n1, n2) {
  while (n1 != n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1;
}

console.log(gcd(32, 8));
