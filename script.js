const FullName = prompt("Please enter your Name");
const Weight = prompt("Enter your weight (kg)");
const Height = prompt("Enter your height meters (e.g 1.73)");
// const BMR = Weight / (Height * 2);
const BMR=Weight/(Height*Height);
if (BMR< 18.5) {
    console.log(FullName,"UNDERWEIGHT")
}
else if (BMR>=18.5 & BMR<=24.9) {
    console.log(FullName, "NORMAL")
}
else if (BMR>=25 & BMR<=29.9) {
    console.log(FullName, "OVERWEIGHT")
}
else if (BMR>=30 & BMR<=34.9) {
    console.log(FullName, "OBESE")
}
else if (BMR>=35) {
    console.log(FullName, "EXTREMELY OBESE")
}

alert("Bye. Exercise all the time :)");
