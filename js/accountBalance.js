// card1 part
document
  .getElementById("card1-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount");
    if (isNaN(donateMoney)) {
      return null;
    }

    const Balance = getTextBtnValueForDonate("main-balance");
    if (donateMoney > Balance) {
      alert("you do not have enough money");
      return;
    }
    // document.getElementById("my_modal_1").showModal();

    const newBalance = Balance - donateMoney;

    document.getElementById("main-balance").innerText = newBalance;
  });
// card2 part
document
  .getElementById("card2-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney2 = getInputBtnValueForDonate("input-donation-amount-2");
    if (isNaN(donateMoney2)) {
      return null;
    }

    const Balance2 = getTextBtnValueForDonate("main-balance");
    if (donateMoney2 > Balance2) {
      alert("you do not have enough money");
      return;
    }
    const newBalance2 = Balance2 - donateMoney2;
    document.getElementById("main-balance").innerText = newBalance2;
  });

// card3 part
document
  .getElementById("card3-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount-3");
    if (isNaN(donateMoney)) {
      return null;
    }

    const Balance = getTextBtnValueForDonate("main-balance");
    if (donateMoney > Balance) {
      alert("You do not have enough money");
      return;
    }
    const newBalance = Balance - donateMoney;
    document.getElementById("main-balance").innerText = newBalance;
  });
