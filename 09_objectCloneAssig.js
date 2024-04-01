

const bankSbi = {
    bankname: "SBI",
    branch: "kothrud",
    IFSC: "sbi12345679",
    city: "pune"
}
console.log(`=====STEP 1=====`);
console.log(bankSbi);

const banklocaction = {
    street: "lohegaon",
    city: "pune",
    pin: 411047
}

console.log(`=====STEP 2=====`);
console.log(banklocaction);


console.log(`=====STEP 3=====`);
console.log(`===== Cloning an Object using Object.assign()======`);
const clonebanksbi = Object.assign({}, bankSbi,banklocaction)
console.log(clonebanksbi);

console.log(`=====STEP 4=====`);
const rateOfIntrest = {
    homeLoneIntrest: 12.5,
    personalLoneIntrest: 10.5,
    dueInIntrest: 7
}
console.log(rateOfIntrest);

console.log(`=====STEP 5=====`);
console.log(`===== merge step1, step2, step3======`);
const sbiDetails = Object.assign({}, bankSbi,banklocaction,rateOfIntrest)
console.log(sbiDetails);

console.log(`===== Traversing an sbiDetails object using for in loop=======`);
for (const index in sbiDetails) {
    console.log(sbiDetails);
}


