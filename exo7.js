var n = parseInt(prompt("Entrez un chiffre N :"));
var m = parseInt(prompt("Entrez un autre chiffre N :"));

var sum = 0;
for (var i = 1; i <= n; i++) {
 sum += i;
}

for (var j = 1; j <= m; j++) {
 sum += j;
}

alert("Le résultat de la somme des factoriels est : " + sum);