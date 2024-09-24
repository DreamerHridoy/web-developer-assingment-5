// card1 part
document
  .getElementById("card1-donate-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const donateMoney = getInputBtnValueForDonate("input-donation-amount");

    if (isNaN(donateMoney)) {
      return null;
    }
    //  modal calling
    document.getElementById("my_modal_1").showModal();

    const Balance = getTextBtnValueForDonate("balance-field");

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
    event.preventDefault;
    const donateMoney2 = getInputBtnValueForDonate("input-donation-amount-2");
    const Balance2 = getTextBtnValueForDonate("balance-field-2");
    const newBalance2 = Balance2 + donateMoney2;
    document.getElementById("balance-field-2").innerText = newBalance2;

    // adding in transaction history time and text
    const p = document.createElement("p");
    const currentDateTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    p.innerText = `
    ${donateMoney2}BDT is Donate for Flood Relief in Feni,Bangladesh 
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
    const newBalance = donateMoney + Balance;
    document.getElementById("balance-field-3").innerText = newBalance;

    // adding in transaction history time and text
    const p = document.createElement("p");
    const currentDateTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
    });
    p.innerText = `
    ${donateMoney} BDT Aid for Injured in the Quota Movement 
    Date: ${currentDateTime}`;

    // adding in history
    document.getElementById("transaction-container").appendChild(p);
  });
