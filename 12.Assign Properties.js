let obj = {};

let nameProp = 'ssid';
obj[nameProp] = '90127461';
let ageProp = 'status';
obj[ageProp] = 'admin';
let genderProp = 'expires';
obj[genderProp] = '600';
{
    console.log(nameProp + ":" + " '" + obj.name + "',");
    console.log(ageProp + ":" + " '" + obj.age + "',");
    console.log(genderProp + ":" + " '" + obj.gender + "'");
}