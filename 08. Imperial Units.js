function solve([num]){
  num = Number(num);

    var inches = (num ).toFixed(0);
    var feet = Math.floor(num / 12);
   inches %= 12;
    a = '"';

        console.log(feet + "'" + "-" + inches + a);

}


solve([11]);