const form = document.getElementById("feedback-form");
const popup = document.getElementById("thankyou-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  popup.style.display = "flex";
});

function closePopup() {
  popup.style.display = "none";
}
