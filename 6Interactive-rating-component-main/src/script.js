let numberContainer = document.querySelector(".rate-container");
let rateNumber = document.querySelector(".select-rate");
let submitButton = document.querySelector(".complete-form");
let ratingState = document.querySelector(".container-one");
let thankyouState = document.querySelector(".container-two");

numberContainer.addEventListener("click", event => {
  let numberSelected = event.target.innerText;
  rateNumber.innerText = numberSelected;
  if(numberSelected > 0 || numberSelected <= 5) {
    submitButton.addEventListener("click", () => {
      ratingState.style.display = "none";
      thankyouState.style.display = "flex";
    })
  }
});