const btnCopy = document.querySelector(".btn-copy");
const txtCopy = document.querySelector(".box p");

btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(txtCopy.innerText);
});

// autre methode
btnCopy.addEventListener("click", (e) => {
  navigator.clipboard.writeText(e.target.previousElementSibling.innerText);
});
