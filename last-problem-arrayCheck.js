let newArray = [2, 52, 49, 8, -7, 52, 6, -9, -88, 7, 120, 44, -55];
let outputArray = [];
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] < 0)
        break;
    outputArray.push(newArray[i]);
}
console.log(outputArray);