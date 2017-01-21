function convertGradsToDegrees([grad]){
    grad = Number(grad);
    grad = grad % 400;
    if (grad < 0){
        grad += 400;
    }
   let convert = grad * 0.9;
    {
        console.log(convert);
    }
}

convertGradsToDegrees([-50])