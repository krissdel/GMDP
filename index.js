// apres avoir créé toute la structure de notre générateur de mot de passe

// il faudrait pour commencer se créé une fonction qu'on appel lorqu'on appuie sur le boutton
// et sa nous génere un mot de passe (créon cette logique )

function generatePassword() {
  // on verrifie
  console.log("je génére un mot de passe ");
}
// ou en fonction fleché
// const generatePassword = () => {

// }
// ---------
//   on va créé un eventListener sur le bouton on ecrit
// n'oublier pas generateButton est connu de javascript

generateButton.addEventListener("click", () => {
  // on fait un test :
  //   console.log("test");
});
// on peut l'écrire en fonction  fleché,
// mais on peut également appeller directement la fonction , on ecrit

generateButton.addEventListener("click", generatePassword);
//  on verifie dans la console que tout fonctionne bien
// donc, du coup pour le moment cette logique de fonctionnement est bonne

// on va pouvoir remplir ensuite cette fonction (generatePassword)
// comment on va faire ?:

// on va stocker dans des tableau  toutes les données necessaire,
//  les majuscules, les chiffres et les symboles.

// on ecrit :

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn"; // toutes les lettres de mon clavier
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
//ou on peut écrire :
// const dataUppercase = dataLowercase.toUpperCase();

// on verrifie avec un console log
//  pour les numbers on ecrit :
const dataNumbers = "0123456789";

// et pour les symboles :
// on ecrit :
const dataSymbols = "&é'(-è_çà)\"=^$ù!:;,µ%";
// on verifie avec un console.log();
// ---------------

// maintenant, il faudrait savoir, ce qui a été coché,
// pour le mettre dans un tableau global

// donc on retourne dans notre fonction generatePassword:
function generatePassword() {
  //   on ecrit une variable dans laquelle on va mettre
  //   les données qui on été coché:

  let data = [];
  // pour verifier  ce qui a été coché, on ecrit :
  console.log(lowercase.checked); // il me dit true
  console.log(uppercase.checked); // ilme dit false,
  //   donc il reconnait ce qui a été coché.

  // Alors comment il fait, car on a rien declaré ??
  // reponse: on va au niveau de index.html et on regarde l'id de l'input de la checkbox
  //
  //  Quand on met un id a une checkbox, elle est connue comme le bouton
  //   on a pas  besoin de la declarer.
  // juste en disant uppercase, il sait de quoi on parle

  // du coup, grace a ca on va pouvoir interroger et savoir si c'est chècké ou non
  //  avec un if , on ecrit :

  if (lowercase.checked) data.push(dataLowercase);
  if (uppercase.checked) data.push(dataUppercase);
  if (numbers.checked) data.push(dataNumbers);
  if (symbols.checked) data.push(dataSymbols);

  //   on verrifie :
  console.log(data);

  //    maintenant si on veut avoir des lettres au hazard.
  //    alors ! si on ecrit :
  console.log(data[2]); // on aura undefined, car on choisi l'index
  //    l'index2 correspond a la 3eme touche des numbers
  // (on verrifie en cochant la touche number )
  // et si on ecrit : --> console.log(data[2][2])--> on recupere uniquement le 2.
  // alors, si on doit faire ca pour toutes les touches, ca devient compliqué.

  //  ce qu'il faudrait faire, c'est casser le tableau pour avoir une seul donnée
  //  une seul chaine de caractère
  // on va utiliser le spread operateur (...)--> du coup on va séparer toutes les lettres
  // on ecrit:

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  //   on verrifie avec
  console.log(data);
  //   grace a ca, il va etre beaucoup plus facile, d'aller recupperrer des information,
  // par exemple si on ecrit :
  console.log(data[5]);
  //    du coup ,ca marche on arrive a stocker dans data tous ce que l'utilisateur veux

  //  si on veut une donnée au hazard, on ecrit
  console.log(data[Math.random()]); //Math.random()--> nous fournie un chiffre au hazard
  //    compris entre 0 et 1 (avec des virgules)

  //   pour avoir un nombre entier, on rajoute: Math.floor()
  // on ecrit :
  console.log(data[Math.floor(Math.random())]);

  //   du coup, il faudrait multiplier par le nombre maximum que l'on pourrai avor.

  //    Quel est le nombre max que l'on pourrait avoir ??
  //  on ecrit :
  console.log(data[Math.floor(Math.random() * data.length)]);
  //  grace a cette façon d'ecrire, on obtient dans tous les cas une valeur au hazard
}

//   -------------
// maintenant il faudrait que cette lettre au hazard soit générer autant de fois
//  que demandé.c'est a dire autant de fois que le nombre que l'on choisit. (cf index.html)

//   comment on fait ??:
// on recupere  la valeur (value) de ce qu'il y a ecrit dans le range
// on ecrit :
const rangeValue = document.getElementById("password-length");
//--> (mettre cette varriable en haut )
// on verrifie
console.log(rangeValue); // on peut voir que l'on est dans un objet
// donc comment on circule dans un objet ??

// on ecrit :
console.log(rangeValue.value);
// il va falloire utiliser une boucle for dans la fonction generatePassword
for (i = 0; i < rangeValue.value; i++) {
  //en gros tu continue , tant que i est inferieur a la valeur de rangValue
  console.log(data[Math.floor(Math.random() * data.length)]);
}

// --------------------
// par contre si rien n'est coché on a undefined
// donc on va mettre une petite securité avant la boucle for
// on ecrit :
if (data.length === 0) {
  alert("veuilez selectionner de parametres");
  return; // ceux dire que sa fini la
}

// -------------------
// mainteant, il faudrait  stocké toutes s'est donné
//  on peut les stocker dans un tableau
// on rajoute en haut de la fonction generatePassword()
// un let  : on ecrit :
let password = "";

//  et au niveau de la boucle for on change le console log avec
// password ce qui donne :

for (i = 0; i < rangeValue.value; i++) {
  password = data[Math.floor(Math.random() * data.length)];
  console.log(password); // on a qu'une seul lettre
  //   si on veut que sa affiche toutes les lettres
  // on ecrit :
  password += data[Math.floor(Math.random() * data.length)];
  console.log(password);
}
// une fois qu'on a reussie a tout afficher dans la consol
//  il faut faire en sort de le rendre a l'ecran

//  on rajoute une constante tout en haut
// on ecrit :
const passwordOutput = document.getElementById("password-output");
// on vérrifit
console.log(passwordOutput);

//  du coup appres la boucle for on ecrit :
// lorqu'il s'agit d'un input , on ne peut pas mettre
// ni de l' InnerHtml ni  du textcontent

// donc pour mettre quelque choses dans l'input on utilise la value
//  de l'input dans le index.html

passwordOutput.value = password;

// Maintenant  si on veut copier le mot de passe
//  on peut utiliser en javascript le execCommande
// on ecrit tout d'abord :
passwordOutput.select(); //--> qui va le selectionner
// et pour copier on ecrit :
document.execCommande("copy"); //==> obsolete

// ---------------
// l'utilisateur ne sait pas que le mot de pass est copier
// pour faire en sorte  qu'il le sache, on pourrai modifier
// le contenu du text generer mot de passe en--> mot de passe copier

// on ecrit :
generateButton.textContent = "Copié !!!";

// pour que le boutton revienne a l'état initial, on ecrit :
setTimeout(() => {
  generateButton.textContent = "Générer mot de passe ";
}, 2000);
