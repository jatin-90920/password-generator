const numberSet = "1234567890";
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const symbolSet = "~!@#$%^&*_+-?/|";

// selectors
const passBox = document.getElementById("pass-box");
const passLength = document.getElementById("text-length");
const upperLetter = document.getElementById("uppercase");
const lowerLetter = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbols = document.getElementById("symbols");

const generateRandom = (dataSet)=>{
    return dataSet[Math.floor(Math.random()*dataSet.length)];
}

const generatePassword = (password = "")=>{
if(upperLetter.checked){
    password += generateRandom(upperSet);
}
if(lowerLetter.checked){
    password += generateRandom(lowerSet);
}
if(number.checked){
    password += generateRandom(numberSet);
}
if(symbols.checked){
    password += generateRandom(symbolSet);
}
if(password.length < passLength.value){
    return generatePassword(password);
}
passBox.innerText= truncateString(password,passLength.value);
navigator.clipboard.writeText(passBox.innerText);
}
document.getElementById("btn").addEventListener('click',function() {
    generatePassword();
});
generatePassword();
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}