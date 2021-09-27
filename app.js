const billAmount= document.querySelector("#bill-amount");
const cashGiven= document.querySelector("#cash-given");
const message= document.querySelector("#errorMessage");
const validateButton= document.querySelector("#validate");
const numberOfNotes= document.querySelectorAll(".no-of-notes");

const notesAvailable= [2000,500,100,50,20,10,1];

validateButton.addEventListener("click", function clickHandler(){
    hideMessage();
    if(billAmount.value > 0)
    {
        if(cashGiven.value >= billAmount.value)
        {
            console.log("hello");
            const changeToBeGiven= cashGiven.value - billAmount.value;
            calculateChange(changeToBeGiven);
        }
        else
        {
            showMessage("Cash given should be more than the bill amount");
        }
    }
    else
    {
        showMessage("Please enter a valid amount");
    }
});

function calculateChange(amount){
    for(let i=0; i<notesAvailable.length; i++){
        const calculateNotes= Math.trunc(amount / notesAvailable[i]);
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
