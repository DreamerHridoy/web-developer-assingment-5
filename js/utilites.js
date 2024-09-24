function getInputBtnValueForDonate(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  return inputValueNumber;
}
function getTextBtnValueForDonate(id) {
  const textValue = document.getElementById(id).innerText;
  const textValueNumber = parseFloat(textValue);
  return textValueNumber;
}

function showSectionById(id) {
  document.getElementById("donation-money-form").classList.add("hidden");
  document.getElementById("history-of-transaction").classList.add("hidden");

  //   removing hidden for selected id
  document.getElementById(id).classList.remove("hidden");
}
