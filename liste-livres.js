let livres = [];
let btnValider;

function afficherTableau(){
  let tbody = document.querySelector("tbody");
  let newHTML = "";
  for(let i=0; i < livres.length; i++){
    newHTML += "<tr>";
    newHTML += "<th scope='row'>" + livres[i].isbn + "</th>";
    newHTML += "<td>" + livres[i].titre + "</td>";
    newHTML += "<td>" + livres[i].auteur + "</td>";
    newHTML += "<td>" + livres[i].categorie + "</td>";
    newHTML += "</tr>";
  }
  tbody.innerHTML = newHTML;
}

function ajouterLivre(){
  //Collecter les données du formulaire
  const isbnVal = document.getElementById("isbn").value;
  const titreVal = document.getElementById("titre").value;
  const auteurVal = document.getElementById("auteur").value;
  const categorieVal = document.getElementById("categorie").value;

  //Créer un nouvel objet Livre
  const newLivre = new Livre (isbnVal, titreVal, auteurVal, categorieVal);

  //Ajouter le nouveau livre au tableau livres
  livres.push(newLivre);
  console.table(livres);

  //rafraichir l'affichage du tableau HTML
  afficherTableau();

}

function init(){
  livres = [
    new Livre(1234, "The slight edge", "Jeff Olsen", "Personal Transformation"),
    new Livre(5678, "The power of habits", "Charles Duhigg", "Psychology & Counseling"),
    new Livre(9876, "Atomic habits", "James Clear", "Psychology & Counseling")
  ];
  btnValider = document.getElementById("btnValider");
  btnValider.addEventListener("click", ajouterLivre)

}

function main(){
  //console.log("Hi");
  init();
  afficherTableau();



}

window.addEventListener("load", main); //main est une fonction de callback
//console.log("Hello");
