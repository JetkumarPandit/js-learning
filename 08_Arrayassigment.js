


var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
const element0 = fruits_seasonal[0];
console.log(`=====step 1======`);
console.log(fruits_seasonal);
console.log(`0th element is: ${element0}`);
const element1 = fruits_seasonal[4];
console.log(`last index element from the array is : ${element1} `);

console.log(`=====step 2======`);
var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
console.log(fruits_seasonal);
console.log(`Add element papaya before the element Banana`);
var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
fruits_seasonal.unshift('papaya');
console.log(fruits_seasonal);

console.log(`=====step 3======`);
var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
console.log(fruits_seasonal);
console.log(`Remove mango form the array`);
var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
const deleteElements = fruits_seasonal.splice(3, 1);
console.log(deleteElements);
console.log(fruits_seasonal);

console.log(`=====step 4======`);

var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
console.log(fruits_seasonal);
console.log(`insert the element pineapple at the last position`);
fruits_seasonal.push('pineapple');
console.log(fruits_seasonal);


console.log(`=====step 5======`);
var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
console.log(fruits_seasonal);
var deleteElement = fruits_seasonal.splice(4, 0,'Dragon fruit');
console.log(`insert element Dragon Fruit before water melon`);
console.log(fruits_seasonal);


console.log(`=====step 6======`);
var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
console.log(fruits_seasonal);
const deleteElement1 = fruits_seasonal.splice(1, 1,'kiwi');
console.log(deleteElement);
console.log(`replace element orange with Kiwi`);
console.log(fruits_seasonal);


console.log(`=====step 7======`);
var fruits_seasonal = ['Banana','Orange','Apple','Mango','Water melon'];
console.log(fruits_seasonal);
const subArrayNew =fruits_seasonal.slice(1);
console.log(`elements starting form index 1 to 4`);
console.log(subArrayNew);
console.log(`=====step 8======`);
console.log(`only select last 3 elements`);
const subArrayNew1 =fruits_seasonal.slice(2);
console.log(subArrayNew1);






