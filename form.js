const form = document.getElementById("form");
const successOverlay = document.querySelector(".success__form-overlay");
const successText = document.querySelector(".success_text");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  fetch(form.action, {
    method: form.method,
    body: new FormData(form)
  })
  .then((response) => {


  successOverlay.classList.add("show");

  form.reset();


  setTimeout(() => {
    successOverlay.classList.remove("show");
  }, 2000); // Через 2 секунди повідомлення про успішну відправку зникне
});
});