let n = parseInt(prompt("Entrez un nombre:"));
let somme = 0;

for (let i = 1; i <= n; i++) {
 somme += i;
}

alert("La somme des chiffres de 1 à " + n + " est : " + somme);