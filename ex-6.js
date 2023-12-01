// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";
let test = "";
//นับถอยหลัง
for (let i = companyName.length - 1; i >= 0; i--) {
  reversedCompanyName = reversedCompanyName + String(companyName[i]);
}

console.log(reversedCompanyName);

//นับไปข้างหน้า
for (let i = 0; i < companyName.length; i++) {
  test = companyName[i] + test;
}

console.log(test);
