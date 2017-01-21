function distanceAndTime([a, b, c]) {
    var v1 = Number(a);
    var v2 = Number(b);
    var t = Number(c);

    var delta = Math.abs(a - b);
   var time = (t / 3600);
    var s = (delta * time);
    var distance = s * 1000;
    {
        console.log(distance);
    }
}
distanceAndTime([5, -5, 40])