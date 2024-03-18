

var marrageCheck = function(age, candidateName){

    if (age>21) {
        console.log(`Eligible for marrage : ${age} ${candidateName}`);
    }
}

marrageCheck(28 , "bill");
marrageCheck(23 , "stew");
marrageCheck(10 , "elon");



var marriageEligibility = function(age, candidateName, gender){

    if (age>=21 && gender=="Male") {

        console.log(`Eligible : Age- ${age}, Name- ${candidateName}`);

    }

}

marriageEligibility(23, "Bill", "Male");

marriageEligibility(20, "Elon", "Male");  