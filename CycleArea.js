function area(r){
    let result = Math.PI * (r * r);
    console.log(result);

    let areaRounded = Math.round(result * 100) / 100;
    console.log(areaRounded);
}

area(['5'])