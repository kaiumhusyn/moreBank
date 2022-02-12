function getInputValue(){
    const depositInput = document.getElementById('deposit-amount');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear input field
    depositInput.value = '';
    return depositAmount;
}






document.getElementById('deposit-button').addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-amount');
    const depositAmountText = depositInput.value; */
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmountText = getInputValue();
  

    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = parseFloat(depositAmountText)+parseFloat(depositTotalText);

    // depositTotal.innerText = previousDepositTotal + depositAmount;
    console.log(depositTotalText);


    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;

    balanceTotal.innerText = parseFloat(balanceTotalText) + parseFloat(depositAmountText);

    /* //clear input field
    depositInput.value = ''; */
})

//handle withdraw button

document.getElementById('witdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    console.log(withdrawAmountText);

    //update withdrawTotal
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;

    withdrawTotal.innerText= parseFloat(withdrawTotalText) + parseFloat(withdrawAmountText);

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    balanceTotal.innerText = parseFloat(balanceTotalText) - parseFloat(withdrawAmountText);



    //clear input field
    withdrawInput.value = '';
})