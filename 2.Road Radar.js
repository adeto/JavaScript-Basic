function getLimit(zone){
    switch(zone){
        case 'motorway': return 130;
        case 'interstate': return 90;
        case 'city': return 50;
        case 'residential': return 20;
    }
}
function getInfraction(speed, limit) {
    var overSpeed = speed - limit;
    if (overSpeed <= 0){
        return false;
    }
   // else if (speed <= 20 ) {
     //   console.log("speeding");
    //}
    //else if (speed >20 || speed <= 40){
    //    console.log("expensive speeding")
   // }
  //  else if (speed > 40){
  //      console.log("reckless driving");
  //  }
  //  else {
       // console.log(" ");
   // }
    var limit = getLimit(zone);
    var infraction = getInfraction(speed, limit);
    if (infraction){
        console.log(infraction);
    }
}

getLimit([40, 'city']);
