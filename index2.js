const passwordOutput = document.getElementById("password-output");
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const dataNumbers = "0123456789";
const dataSymbols = "&é'(-è_çà)\"=^$ù!:;,µ%";
const rangeValue = document.getElementById("password-length");

console.log(rangeValue.value);

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("veuilez selectionner de parametres");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }
  passwordOutput.value = password;

  //  -----------[ancienne methode]--------------
  //   passwordOutput.select();
  //   document.execCommande("copy"); //==> obsolete

  //   ------------------------

  //   navigator.clipboard.writeText(rangeValue.innerText);

  //   generateButton.textContent = "copier !";

  //   setTimeout(() => {
  //     generateButton.textContent = "Générer mot de passe ";
  //   }, 2000);
}

const btnCopy = document.querySelector("span");
console.log(btnCopy);
// const txtCopy = document.getElementById("password-output").value;
// console.log(txtCopy);

btnCopy.addEventListener("click", () => {
  passwordOutput.select(); //--> qui va le selectionner
  // et pour copier on ecrit :
  document.execCommand("copy"); //==> obsolete
  //   navigator.clipboard.writeText(txtCopy.value);
  //   console.log(test);
  //   console.log(e.target.previousElementSibling.innerText);
});

generateButton.addEventListener("click", generatePassword);
