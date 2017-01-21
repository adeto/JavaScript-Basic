function number([num]) {
    var a = num % 2

    if (a == 0) {
       console.log("even")
    }
    else if ( a == Math.round(a)) {
        console.log("odd")
    }
    else {
        console.log("invalid")
    }
}

number([5])
