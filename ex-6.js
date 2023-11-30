// Exercise #6: Reverse the String
let companyNames = "TechUp Thailand";
let reversedCompanyName = "";


// Start coding here
function reverseStr(companyNames) {
while (i < companyNames.length) {
    reversedCompanyName = companyNames[i] + reversedCompanyName;
  i++;
    }
  return reversedCompanyName;
 }
console.log(reversedCompanyName);
