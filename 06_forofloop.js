const arrayNumbers = [2, 4, 1, 7, 9, 8];

for (const element of arrayNumbers) {
    console.log(element);
}

let sum = 0;// 7
for (const element of arrayNumbers) {

    sum = sum + element;
}
console.log(`Sum of an array : ${sum}`);
let multiplication = 1;
for (const element of arrayNumbers) {
    multiplication = multiplication * element;
}
console.log(`multiplication of an array : ${multiplication}`);