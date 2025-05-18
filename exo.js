// 1. Inverser une chaîne
function inverserChaine(str) {
  return str.split('').reverse().join('');
}

// 2. Nombre de caractères
function nombreCaracteres(str) {
  return str.length;
}

// 3. Mettre en majuscule les mots
function mettreEnMajusculeLesMots(phrase) {
  return phrase
    .split(' ')
    .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(' ');
}

// 4. Trouver le maximum dans un tableau
function maxTableau(tab) {
  return Math.max(...tab);
}

// 5. Trouver le minimum dans un tableau
function minTableau(tab) {
  return Math.min(...tab);
}

// 6. Somme du tableau
function sommeTableau(tab) {
  return tab.reduce((acc, val) => acc + val, 0);
}

// 7. Tableau de filtres selon une condition (fonction de filtrage en paramètre)
function filtrerTableau(tab, condition) {
  return tab.filter(condition);
}

// 8. Factoriel
function factoriel(n) {
  if (n < 0) return undefined;
  let res = 1;
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

// 9. Vérification du nombre premier
function estPremier(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 10. Séquence de Fibonacci jusqu'à un nombre donné de termes
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}

// Exemples d'utilisation
// Chaînes
console.log(inverserChaine("javascript")); // "tpircsavaj"
console.log(nombreCaracteres("Bonjour!")); // 8
console.log(mettreEnMajusculeLesMots("bonjour tout le monde")); // "Bonjour Tout Le Monde"

// Tableaux
console.log(maxTableau([3, 5, 1, 9])); // 9
console.log(minTableau([3, 5, 1, 9])); // 1
console.log(sommeTableau([3, 5, 1, 9])); // 18
console.log(filtrerTableau([1, 2, 3, 4, 5], x => x % 2 === 0)); // [2, 4]

// Mathématiques
console.log(factoriel(5)); // 120
console.log(estPremier(7)); // true
console.log(estPremier(10)); // false
console.log(fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13]