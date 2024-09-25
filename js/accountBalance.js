// card1 part
document
  .getElementById("card1-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount");
    if (isNaN(donateMoney)) {
      return null;
    }

    const mainBalance = getTextBtnValueForDonate("main-balance");
    if (donateMoney >= mainBalance) {
      alert("you do not have enough money");
      return;
    } else {
      document.getElementById("my_modal_1").showModal();
    }
    // document.getElementById("my_modal_1").showModal();

    const newBalance = mainBalance - donateMoney;

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

    const mainBalance = getTextBtnValueForDonate("main-balance");
    if (donateMoney2 > mainBalance) {
      alert("you do not have enough money");
      return;
    } else {
      document.getElementById("my_modal_1").showModal();
    }
    const newBalance2 = mainBalance - donateMoney2;
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

    const mainBalance = getTextBtnValueForDonate("main-balance");
    if (donateMoney > mainBalance) {
      alert("You do not have enough money");
      return;
    } else {
      document.getElementById("my_modal_1").showModal();
    }
    const newBalance = mainBalance - donateMoney;
    document.getElementById("main-balance").innerText = newBalance;
  });
