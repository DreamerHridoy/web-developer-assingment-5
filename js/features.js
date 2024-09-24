document.getElementById("donation-form").addEventListener("click", function () {
  showSectionById("donation-money-form");
  if (
    !document.getElementById("donation-form").classList.contains("bg-green-400")
  ) {
    document.getElementById("donation-form").classList.add("bg-green-400");
  }

  document.getElementById("history-form").classList.remove("bg-green-400");
});

// history-form
document.getElementById("history-form").addEventListener("click", function () {
  showSectionById("history-of-transaction");
  this.classList.add("bg-green-400");
  document.getElementById("donation-form").classList.remove("bg-green-400");
});
