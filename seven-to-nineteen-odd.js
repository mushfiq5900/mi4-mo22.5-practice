let i = 7;
let iStore = [];
while (i >= 7 && i <= 19) {
    if (i % 2 != 0) {
        iStore.push(i);
        i++
    }
    else {
        i++;
    }
}
console.log(iStore);