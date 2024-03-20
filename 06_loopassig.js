
console.log("======step 1======");
const word ="I am very good it developer";
const vowels = 'aeiou';
 let vowelsCount = 0;
 for (let index = 0; index < word.length; index++) {
let char = word.charAt(index);
let lowerCase = char.toLocaleLowerCase();
if (vowels.includes(lowerCase)){
    vowelsCount++;

}

 }
 console.log("Number of vowels in string : " , vowelsCount);    

 console.log("======step 2======");

 let sum = 0;
 for (let index = 0; index <=5; index++) {
   sum = sum + index* index * index;
 
 }
 console.log("sum of the cube is : ", sum);

 console.log("======step 3======");


function oddpositionedChars(word) {
    for (let index = 0; index < word.length; index++) {
        const element = word.charAt(index);
        if (index%2!=0 && element !=" ") {
            console.log(element);
            
        }
        
    }
    
}
console.log("odd positioned for first string are : ");
oddpositionedChars("Hard work always pays back");
console.log("odd positioned for second string are");
oddpositionedChars("Soon I will be  UI IT Champ");