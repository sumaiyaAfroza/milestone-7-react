// multiple condition if else/ ternary vhabe

const num = 10;
const result = (num >=10 && num <20 )? "ture":"false";
console.log(result);

// ----------------------------------------------------------------


// isActive, isStatus etc just ture-false gula re ! aita deoa mane tar ulta ta dekabe. 
// jemon: ture takle ! aita dia chq korle output ulta asbe mane false asbe.

const isActive = true;
// console.log(!isActive)

const showUsesr = () => console.log("show user green")

const hideUser =()=> console.log("hide user")

// jodi isActive true hoi tahole showuser()dekabe
isActive? showUsesr(): hideUser()


// sudu matro ture hole dekabe naile ksiui dekabe na tokon
isActive && showUsesr();

//  or (||) holo ulta ta  kaj kore . sudu matro false hole dekabe naile kisui dekabe na(true hole dekabe na)
isActive || hideUser()

// ------------------------------------------------------------------------


// type quertion
// kuno nmb jodi string vhabe take tahole sudu + er  khetre oi variable sate +num/+variable dite js buje je aita typeof number

let num = "10";
const result = +num; 
console.log(typeof result)
