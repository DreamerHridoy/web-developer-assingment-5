// card1 part
document
  .getElementById("card1-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount");

    const Balance = getTextBtnValueForDonate("balance-field");
    const newBalance = donateMoney + Balance;
    document.getElementById("balance-field").innerText = newBalance;
  });
// card2 part
document
  .getElementById("card2-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const donateMoney2 = getInputBtnValueForDonate("input-donation-amount-2");
    const Balance2 = getTextBtnValueForDonate("balance-field-2");
    const newBalance2 = Balance2 + donateMoney2;
    document.getElementById("balance-field-2").innerText = newBalance2;
  });

// card3 part
document
  .getElementById("card3-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount-3");

    const Balance = getTextBtnValueForDonate("balance-field-3");
    const newBalance = donateMoney + Balance;
    document.getElementById("balance-field-3").innerText = newBalance;
  });
