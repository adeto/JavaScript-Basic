function compoundInteres([principal, interest, period, time]){
 [principal, interest, period, time] = [principal, interest, period, time].map(Number);

 interest /= 100;
    let frequency = 12 / period;
    let A = principal * Math.pow(1 + interest/frequency, frequency * time);

    console.log(A.toFixed(2));
}

compoundInteres([1500, 4.3, 3, 6])