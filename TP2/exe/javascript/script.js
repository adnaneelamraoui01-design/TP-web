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
