function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputText = inputField.value ;
    const inputAmount = parseFloat(inputText);
    inputField.value = '';
    return inputAmount;
}
function getTextValue(id,amount){
    const textField = document.getElementById(id)
    const textValue = textField.innerText;
    const textAmount = parseFloat(textValue);
    textField.innerText = textAmount + amount;
}
function getBalance(id,amount,isAdd){
    const balance = document.getElementById(id);
    const balanceText = balance.innerText;
    const balanceAmount = parseFloat(balanceText);
    if(isAdd == true){
        balance.innerText = balanceAmount + amount;
    }
    else{
        balance.innerText = balanceAmount - amount;
    }
}
document.getElementById('deposite').addEventListener('click',function(){
    const depositeAmount = getInputValue('depositeInput');
    
    getTextValue('deposite-text',depositeAmount)
    getBalance('balance',depositeAmount,true)
})
document.getElementById('withdrow').addEventListener('click',function(){
    const withdrowAmount = getInputValue('withdrowInput');
    
    getTextValue('withdrow-text',withdrowAmount)
    getBalance('balance',withdrowAmount,false)
})