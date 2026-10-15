function trier(liste){
    for(let i = 0; i < liste.length-1; i++){
        for(let j=0; j<liste.length -1;j++){
            if(liste[j]>liste[j+1]){
                let temp=liste[j];
                liste[j]=liste[j+1];
                liste[j+1]=temp;

            }
        }
    }
    return liste;
}
function afficher() {
    let txt = document.getElementById("nbre").value;
    let res = document.getElementById("res");

    let liste = txt.split(",").map(Number);//split coupe le txt a chque ,
    let resultat = trier(liste);

    res.textContent = "Liste triée : " + resultat.join(", ");// l oppos de join est split il regrouppe dnc
    res.className = "corr";
}

document.getElementById("bt").addEventListener("click", afficher);