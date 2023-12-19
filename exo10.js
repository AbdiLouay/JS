

var compteur = 0;
var compteur2 = 0;

var Madiv = document.getElementById("Methode2");
Madiv.addEventListener("click", UneProcedureQuiChangeLetext);

Madiv = document.getElementById("Methode3");
Madiv.addEventListener("mouseover", UneProcedureQuiSurvole);

Madiv = document.getElementById("Methode4");
Madiv.addEventListener("keydown", UneProcedureQuiEcrit);

function UneProcedureQuiEcrit(evenement) {
evenement.target.innerHTML = "On a appuyé sur : "+evenement.key;
}

function UneProcedureQuiChangeLetext(evenement) {
    compteur++;
    evenement.target.innerHTML = "on m'a cliqué dessus "+compteur+" fois";
    }

    function UneProcedureQuiSurvole(evenement) {
        compteur2++;
        evenement.target.innerHTML = "on m'a survollé "+compteur2+" fois";
    }

    // Récupérer l'élément div
var monDiv = document.getElementById("monDiv");

// Ajouter un écouteur d'événement pour le clic de la souris
monDiv.addEventListener("click", function() {
  // Changer la classe CSS de l'élément div
  monDiv.className = "nouvelleClasse";
});

function changerVisibilite(visible) {
    var div = document.getElementById("monDiv2");
    if (visible) {
      div.style.visibility = "visible";
    } else {
      div.style.visibility = "hidden";
    }
  }
  



// HTML

  //<div id="Methode2" classe ="divD">Clic moi dessus</div>
//<div id="Methode3" classe ="divD">Survole moi dessus</div>
//<div id="Methode4" classe ="divD" tabindex="0">Appui au clavier</div>
//<div id="monDiv" class="ancienneClasse">Click</div>
//<div id="monDiv2" onmouseover="changerVisibilite(true)" onmouseout="changerVisibilite(false)">
//   ne me survole pas ou je disparait !
//  </div>