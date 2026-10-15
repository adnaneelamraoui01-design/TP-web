document.getElementById('bt1').onclick = function() {
    document.getElementById('qcm').reset();
};


//(New feneetre/rep corr)
document.getElementById('bt2').onclick = function() {
    let f = window.open('', '', 'width=500,height=500');
    
    f.document.write("<h2>Corrigé du QCM</h2>");
    
    f.document.write("<p><b>Question 1 :</b> <span style='color:green; text-decoration:underline;'>Pomme</span>, <span style='color:green; text-decoration:underline;'>Banane</span>, Carotte, <span style='color:green; text-decoration:underline;'>Fraise</span></p>");
    f.document.write("<p><b>Question 2 :</b> Casablanca, <span style='color:green; text-decoration:underline;'>Rabat</span>, Fès, Marrakech</p>");
    f.document.write("<p><b>Question 3 :</b> <span style='color:green; text-decoration:underline;'>Poisson</span>, <span style='color:green; text-decoration:underline;'>Dauphin</span>, Chat, <span style='color:green; text-decoration:underline;'>Baleine</span></p>");
    f.document.write("<p><b>Question 4 :</b> 5, 6, <span style='color:green; text-decoration:underline;'>7</span>, 8</p>");
    f.document.write("<p><b>Question 5 :</b> <span style='color:green; text-decoration:underline;'>Python</span>, <span style='color:green; text-decoration:underline;'>Java</span>, Excel, <span style='color:green; text-decoration:underline;'>JavaScript</span></p>");
};


//(New feneetre/resultat)
document.getElementById('bt3').onclick = function() {
    let score = 0;
    let texte = "<h2>Résultats du test</h2>";


    let q1 = document.getElementsByName('q1');
    if (q1[0].checked && q1[1].checked && !q1[2].checked && q1[3].checked) {
        score++;
        texte += "<p style='color:green;'>La réponse de la question 1 est correcte</p>";
    } else {
        texte += "<p style='color:red;'>La réponse de la question 1 est incorrecte</p>";
    }

    
    let q2 = document.getElementsByName('q2');
    if (q2[1].checked) {
        score++;
        texte += "<p style='color:green;'>La réponse de la question 2 est correcte</p>";
    } else {
        texte += "<p style='color:red;'>La réponse de la question 2 est incorrecte</p>";
    }

    
    let q3 = document.getElementsByName('q3');
    if (q3[0].checked && q3[1].checked && !q3[2].checked && q3[3].checked) {
        score++;
        texte += "<p style='color:green;'>La réponse de la question 3 est correcte</p>";
    } else {
        texte += "<p style='color:red;'>La réponse de la question 3 est incorrecte</p>";
    }


    let q4 = document.getElementsByName('q4');
    if (q4[2].checked) {
        score++;
        texte += "<p style='color:green;'>La réponse de la question 4 est correcte</p>";
    } else {
        texte += "<p style='color:red;'>La réponse de la question 4 est incorrecte</p>";
    }

    
    let q5 = document.getElementsByName('q5');
    if (q5[0].checked && q5[1].checked && !q5[2].checked && q5[3].checked) {
        score++;
        texte += "<p style='color:green;'>La réponse de la question 5 est correcte</p>";
    } else {
        texte += "<p style='color:red;'>La réponse de la question 5 est incorrecte</p>";
    }

    // Score final
    texte += "<h3>Note finale : " + score + " / 5</h3>";

    // Ouverture de la fenêtre de résultat
    let f = window.open('', '', 'width=400,height=400');
    f.document.write(texte);
};