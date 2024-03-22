
const arrayNum2 = [2, 4, 1, 7, 9, 8];

console.log(`===== Traversing an array using for in loop=======`);
for (const index in arrayNum2) {
    console.log(arrayNum2[index]);
}

console.log(`=======Odd index elements===========`);
for (const index in arrayNum2) {
    if (index%2!=0) {
        console.log(arrayNum2[index]); 
    }
}
