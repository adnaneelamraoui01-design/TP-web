function check(){
    let mail = document.getElementById("email").value;
    let res = document.getElementById("res");

    let arobas = mail.indexOf("@");//indexof donne pst d un car dans txt
    let positiondupoint = mail.indexOf(".", arobas); //trouver . apres@

    if (arobas > 0 && positiondupoint > arobas + 1 && positiondupoint < mail.length - 1) {
        res.textContent = "Email valide";
        res.className = "corr";
    } else {
        res.textContent = "Email non valide";
        res.className = "nv";
    }
}

document.getElementById("bt1").addEventListener("click", check);