function rounding([num1, num2]){
    [num1, num2] = [num1, num2].map(Number);
    var d = Math.pow(10, num2);
    var a = Math.round(num1 * d) / d;

    console.log(a);
}

rounding([3.1415926535897932384626433832795, 2])