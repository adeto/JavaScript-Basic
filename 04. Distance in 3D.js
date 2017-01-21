 function distance([x1, y1, z1, x0, y0, z0]) {
    let deltaX = x1 - x0;
    let deltaY = y1 - y0;
    let deltaZ = z1 - z0;

    a = (deltaX * deltaX);
    b = (deltaY * deltaY) ;
    c = (deltaZ * deltaZ);
    dist = Math.sqrt(a + b + c);
    {

        console.log(dist);
    }

}
distance([3.5, 0, 1, 0, 2, -1])