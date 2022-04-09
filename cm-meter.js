function centimeterTometer(inCentimeter) {
    let outMeter = inCentimeter /100;
    return outMeter;
}

let valueInMeter = centimeterTometer(500);
console.log("Value in Meter is:", valueInMeter);