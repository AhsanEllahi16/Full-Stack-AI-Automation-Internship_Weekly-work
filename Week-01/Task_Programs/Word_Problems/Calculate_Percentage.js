let contacts=10;
let dup=4;
let results=function Percentage(){
    let original=contacts-dup;
    let p=original/contacts;
    let percentage=p*100;
    return percentage;
}
console.log(`Original Contacts = ${results()}%`);