function changerdecouleur() {
    let element = document.getElementById("zone1");

    if (element.style.backgroundColor === "pink") {
        element.style.backgroundColor = "aqua";
    } else {
        element.style.backgroundColor = "pink";
    }
}
function masqaff() {
    let texte = document.getElementById("exe2");
    let bouton = document.getElementById("btnMasquer");

    if (texte.style.display === "none") {
        texte.style.display = "block";
        bouton.textContent = "Masquer";
    } else {
        texte.style.display = "none";
        bouton.textContent = "Afficher";
    }
}
/*exe 3*/
function validerleformulaire(){ 
let nom = document.getElementById("Nom").value.trim();
let email = document.getElementById("email").value.trim();//trim supprimer les espaces au debeutt et a la fin
let msg = document.getElementById("message");
if (nom === "" || email === "") {//champs vide ou non
        msg.style.color = "red";
        msg.textContent = "Veuillez remplir tous les champs !";
    } else {
        msg.style.color = "green";
        msg.textContent = "Formulaire enregistré avec succès !";
    }
}
/*exe4*/

function addition(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    let s=eval(num1)+eval(num2);
    document.getElementById("res").value=s;
}
function moins(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    let s=eval(num1)-eval(num2);
    document.getElementById("res").value=s;
}
function multiplication(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    let s=eval(num1)*eval(num2);
    document.getElementById("res").value=s;
}
function division(){
    let num1=document.getElementById("n1").value;
    let num2=document.getElementById("n2").value;
    if(eval(num2) != 0){
        let s=eval(num1) / eval(num2);
        document.getElementById("res").value=s;
    }else{
        document.getElementById("res").value="on ne peut pas diviser par 0";
    }


}
//exe42
// ===== Exercice 4.2 : calculatrice =====
let expression = "";

function afficher() {
    document.getElementById("ecran").textContent = expression;
}

function ajouter(valeur) {
    if (expression === "Erreur") {
        expression = "";
    }
    expression += valeur;
    afficher();
}

function effacer() {
    expression = "";
    afficher();
}

function retour() {
    expression = expression.slice(0, -1);
    afficher();
}

function egal() {
    try {
        let res = eval(expression);
        if (isFinite(res)) {// si le nombre est fini ou non l exemple de divsion par 0
            expression = String(res);
        } else {
            expression = "Erreur";
        }
    } catch (e) { // s il detecte une erreu comme ++ ou qq chse n est ps mgque
        expression = "Erreur";
    }
    afficher();
}
/*exe5*/
const carousel = document.querySelector(".carousl");
const total = document.querySelectorAll(".ca").length;
let temp = 0;

function affiche() {
  carousel.style.transform = "translateX(" + (-temp * 100) + "%)";
}

function suivant() {
  temp = (temp+ 1) % total;
  affiche();
}

function precedent() {
  temp = (temp- 1 + total) % total;
  affiche();
}
/*exe5*/
const titre = document.getElementById("gestion");
const liste = document.getElementById("lise");

titre.addEventListener("click", function () {
  liste.classList.toggle("res");
});
//exe 7
let temps = 0;

setInterval(function() {
    temps--;
    document.getElementById("chrono").innerHTML = "temps ecoules" +temps + " seconde(s)";
}, 1000);
//exe8
let bt1=document.getElementById("bt1-8");
let bt2=document.getElementById("bt2-8");


bt1.addEventListener("mouseenter",function(){
    bt1.style.backgroundColor="green";
})
bt2.addEventListener("mouseenter",function(){
    bt1.style.backgroundColor="gray";
})
bt1.addEventListener("mouseleave",function(){
    bt2.style.backgroundColor="#3498db";
})
bt2.addEventListener("mouseleave",function(){
    bt2.style.backgroundColor="#be4929";
})
//exe9
function Ajouter() {
  let task = document.getElementById("tache").value;
  if (task.trim() != "") {//trim supprimer les espace au debtu et a la fin de la phrase
    let li = document.createElement("li");
    li.textContent = task;

    let boutton = document.createElement("button");
    boutton.textContent = "supprimer cette tache";// creat de la boutton supp
    boutton.onclick = function () {
      li.remove();
    };

    li.appendChild(boutton);//appendchild ajoute le boutton a linteriseur de la liste
    document.getElementById("liste").appendChild(li);
    document.getElementById("tache").value = "";
  }
} //exe 10
function ouvrir(){//afficher notif
    document.getElementById("notif").style.display="block";
}
function fermer(){//fermer notif
document.getElementById("notif").style.display="none";  
}
//exe 15 
function basculer(){
    document.body.classList.toggle("sombre");

    if(document.body.classList.contains("sombre")){
        localStorage.setItem("theme","sombre");
    }else{
        localStorage.setItem("theme","clair");
    }
}


if(localStorage.getItem("theme")==="sombre"){
    document.body.classList.add("sombre");
}/*clas list : pour manipuler les element de css
toggle("sombre") basclule la classe interne , si elle est deja presente elle l enleve ; si elle est absencete elle ajoute
body.classlist.contains(sombre):verifie si l element body possede actuelement la classe interne renvoie true or false
localstorage: stocker des donne de maniere permanante dans le nav
.setItem(1,2) enrigistre 2 sur 1
*/
//exe 13
var temp2 = 0;
function avancer(){
 if(temp2 < 100){
        temp2 = temp2 + 10;
    }
    if(temp2 > 100){
        temp2 = 100;
    }
var barre=document.getElementById("progression");
barre.style.width=temp2 +"%"
barre.textContent=temp2+"%";
}
//exe14
function prendre(event){ // mémoriser l'id de l'élément déplacé
    event.dataTransfer.setData("text", event.target.id);
}

function placer(event){ // autoriser le dépôt
    event.preventDefault();
}

function deposer(event){
    event.preventDefault();
    var id = event.dataTransfer.getData("text");
    var ele = document.getElementById(id);

    // on trouve la zone (même si on dépose sur un autre élément)
    var zone = event.target;
    while(!zone.classList.contains("zone")){
        zone = zone.parentNode;
    }
    zone.appendChild(ele);
}/*
event.dataTransfer.setData("text", event.target.id):
event.dataTransfer:gerer les donnes transporte pendant glisse et depots
setdata=d enregister une donne
eventtarget:represente l element sur lequel l evenelt  se produit
event.preventDefault():
Cette instruction empêche le comportement par défaut du navigateur.
var id = event.dataTransfer.getData("text"):ette instruction récupère l'identifiant mémorisé dans la fonction prendre().
var zone = event.target;

while (!zone.classList.contains("zone")) {
    zone = zone.parentNode;
}:
event.target représente l'élément HTML sur lequel le depot de l element
!zone.classList.contains("zone"): zoneclasslit:donne l acces aux element css
zone = zone.parentNode:parentNode permet de remonter vers l'élément parent dans le HTML.

 */
