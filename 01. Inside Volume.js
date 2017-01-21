function volume(z, y,x) {
    var x1 = 10;
    var x2 = 50;
    var y1 = 20;
    var y2 = 80;
    var z1 = 15;
    var z2 = 50;

    if (x >= x1 && x <= x2) {
        if (y >= y1 && y <= y2) {
            if (z >= z1 && z <= z2) {
                return true;
            }
        }
    }
}
function solve(input) {
    for (var i = 0; i < input.length; i += 3) {
        var x = input[i];
        var y = input[i + 1];
        var z = input[i + 2];

        if (volume(z, y, x)) {
            console.log('inside');
        }
        else {
            console.log('outside');
        }

    }
}


solve([-5, 18, 43]);