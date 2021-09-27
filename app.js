var billAmount= document.querySelector("#bill-amount");
var cashGiven= document.querySelector("#cash-given");
var message= document.querySelector("#errorMessage");
var validateButton= document.querySelector("#validate");
var numberOfNotes= document.querySelector(".no-of-notes");

var notesAvailable= [2000,500,100,50,10,1];

validateButton.addEventListener("click", function clickHandler(){
    hideMessage();
    if(billAmount.value >= 0){
        if(cashGiven.value >= billAmount.value){
            var changeToBeGiven= cashGiven.value - billAmount.value;
            calculateChange(changeToBeGiven);
        }
        else{
            showMessage("Cash given should be more than the bill amount")
        }
    }
    else{
        showMessage("Please enter a valid amount");
    }
})

function calculateChange(amount){
    for(var i=0; i<notesAvailable.length; i++){
        var calculateNotes= Math.trunc(amount / notesAvailable[i]);
        amount= amount % notesAvailable[i];
        numberOfNotes[i].innerText=calculateNotes;
    }
}

function hideMessage(){
    message.style.display="none";
}

function showMessage(errorMsg){
    message.style.display="block";
    message.innerText= errorMsg;
}
