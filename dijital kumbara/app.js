let piggyBank = {
    owner: "Sueda",
    totalMoney: 0,
    targetMoney: 100,
}
function addMoney(amount){
    piggyBank.totalMoney = piggyBank.totalMoney + amount;
    console.log("Added " + amount + " TL to the piggy bank. Current balance: " + piggyBank.totalMoney + " TL.");
}
function checkTarget(){
if(piggyBank.totalMoney >= piggyBank.targetMoney){
    console.log("Congratulations! " + piggyBank.owner + "You have reached your target amount of " + piggyBank.targetMoney + " TL.");
}else{
    let neededMoney = piggyBank.targetMoney - piggyBank.totalMoney;
    console.log("You haven't reached your goal yet. You need " + neededMoney + " TL more.");
}}
checkTarget(); 
addMoney(30); 
addMoney(50); 
checkTarget(); 
addMoney(30); 
checkTarget();
