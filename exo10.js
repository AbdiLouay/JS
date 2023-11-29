

var compteur = 0;
var compteur2 = 0;

var Madiv = document.getElementById("Methode2");
Madiv.addEventListener("click", UneProcedureQuiChangeLetext);

Madiv = document.getElementById("Methode3");
Madiv.addEventListener("mouseover", UneProcedureQuiSurvole);

Madiv = document.getElementById("Methode4");
Madiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
evenement.target.innerHTML = "On a appuyé sur : "+evenment.key;
}

function UneProcedureQuiChangeLetext(evenement) {
    compteur++;
    evenement.target.innerHTML = "on m'a cliqué dessus "+compteur+" fois";
    }

    function UneProcedureQuiSurvole(evenment) {
        compteur2++;
        evenement.target.innerHTML = "on m'a survollé "+compteur2+" fois";
    }