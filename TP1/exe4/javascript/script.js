function additioner(){
    var h=Number(h1.value) +Number(h2.value) +Number(h3.value) 
    var m= Number(m1.value) + Number(m2.value) + Number(m3.value);
    var s = Number(s1.value) + Number(s2.value) + Number(s3.value);

    var somme= h * 3600 +m * 60 +s;
    jr.value=Math.floor(somme / 86400);
    h4.value = Math.floor(somme % 86400 / 3600);
    m4.value = Math.floor(somme % 3600 / 60);
    s4.value = somme % 60;
}
function effac() {
    forme.reset();
}

