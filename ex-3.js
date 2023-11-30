// Exercise #3: Find a Minimum Number
let num = [100, 20, 3, 1000];
let minNumber = Infinity;
// Start coding here


 for (let i = 0; i < num.length;  i++) {
    if (num[i] < minNumber) {
        minNumber = num[i];
    }
}

console.log(minNumber);
