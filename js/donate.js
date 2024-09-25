// card1 part
document
  .getElementById("card1-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount");

    const Balance = getTextBtnValueForDonate("balance-field");

    if (isNaN(donateMoney)) {
      return null;
    }
    //  modal calling
    if (donateMoney <= Balance) {
    }

    const newBalance = donateMoney + Balance;
    document.getElementById("balance-field").innerText = newBalance;

    // adding in transaction history time and text
    const p = document.createElement("p");
    const currentDateTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    });

    p.innerHTML = `
    ${donateMoney} <strong> BDT is Donate for Flood at Noakhali,Bangladesh.</strong> </br>
    Date: ${currentDateTime}`;

    // adding in history
    document.getElementById("transaction-container").appendChild(p);
  });
// card2 part
document
  .getElementById("card2-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const donateMoney2 = getInputBtnValueForDonate("input-donation-amount-2");
    const Balance2 = getTextBtnValueForDonate("balance-field-2");

    if (isNaN(donateMoney2)) {
      return null;
    }
    //  modal calling
    if (donateMoney2 < Balance2) {
      document.getElementById("my_modal_1").showModal();
    }

    const newBalance2 = Balance2 + donateMoney2;
    document.getElementById("balance-field-2").innerText = newBalance2;

    // adding in transaction history time and text
    const p = document.createElement("p");
    const currentDateTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    p.innerHTML = `
    ${donateMoney2}<strong> BDT is Donate for Flood Relief in Feni,Bangladesh</strong> 
    Date: ${currentDateTime}`;

    // adding in history
    document.getElementById("transaction-container").appendChild(p);
  });

// card3 part
document
  .getElementById("card3-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount-3");
    const Balance = getTextBtnValueForDonate("balance-field-3");
    if (isNaN(donateMoney)) {
      return null;
    }
    //  modal calling
    if (donateMoney < Balance) {
      document.getElementById("my_modal_1").showModal();
    }

    const newBalance = donateMoney + Balance;
    document.getElementById("balance-field-3").innerText = newBalance;

    // adding in transaction history time and text
    const p = document.createElement("p");
    const currentDateTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    p.innerHTML = `
    ${donateMoney} 
    <strong>BDT Aid for Injured in the Quota Movement </strong>
    Date: ${currentDateTime}`;

    // adding in history
    document.getElementById("transaction-container").appendChild(p);
  });
