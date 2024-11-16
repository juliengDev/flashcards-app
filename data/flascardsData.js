const flashcardsData = [
  // Méthodes de chaînes
  {
    question:
      "Quelle méthode permet de remplacer une sous-chaîne par une nouvelle chaîne ?",
    answer: ".replace()",
  },
  {
    question:
      "Quelle méthode permet de vérifier si une chaîne de caractères correspond à un modèle ?",
    answer: ".match()",
  },
  {
    question: "Quelle méthode permet de transformer une chaîne en minuscules ?",
    answer: ".toLowerCase()",
  },
  {
    question: "Quelle méthode permet de diviser une chaîne en sous-chaînes ?",
    answer: ".split()",
  },
  {
    question:
      "Quelle méthode permet de supprimer les espaces au début et à la fin d'une chaîne ?",
    answer: ".trim()",
  },
  {
    question:
      "Quelle méthode permet de répéter une chaîne un certain nombre de fois ?",
    answer: ".repeat()",
  },

  // Méthodes de nombres
  {
    question:
      "Quelle méthode permet de renvoyer un entier inférieur ou égal à une valeur ?",
    answer: "Math.floor()",
  },
  {
    question: "Quelle méthode génère un nombre aléatoire entre 0 et 1 ?",
    answer: "Math.random()",
  },

  // Méthodes DOM
  {
    question: "Quelle méthode permet de supprimer une classe d'un élément ?",
    answer: "el.classList.remove()",
  },
  {
    question: "Quelle méthode permet d'ajouter une classe à un élément ?",
    answer: "el.classList.add()",
  },
  {
    question: "Quelle méthode permet de basculer une classe sur un élément ?",
    answer: "el.classList.toggle()",
  },
  {
    question: "Quelle méthode permet de retirer un attribut d'un élément ?",
    answer: "el.removeAttribute('aria-current')",
  },
  {
    question: "Quelle méthode permet d'ajouter un attribut à un élément ?",
    answer: "el.setAttribute('aria-current', 'true')",
  },
  {
    question: "Quelle méthode permet d'ajouter du HTML adjacent à un élément ?",
    answer: ".insertAdjacentHTML()",
  },
  {
    question: "Quelle méthode permet de récupérer un élément par son ID ?",
    answer: "document.getElementById('')",
  },
  {
    question:
      "Quelle méthode permet de récupérer tous les éléments correspondant à un sélecteur ?",
    answer: "document.querySelectorAll('')",
  },
  {
    question:
      "Quelle méthode permet de récupérer le premier élément correspondant à un sélecteur ?",
    answer: "document.querySelector('')",
  },
  {
    question:
      "Quelle propriété permet de changer le contenu HTML d'un élément ?",
    answer: "el.innerHTML = ''",
  },
  {
    question: "Quelle propriété permet de changer le texte d'un élément ?",
    answer: "el.innerText = ''",
  },
  {
    question:
      "Quelle propriété permet de changer le contenu texte d'un élément sans tenir compte du format ?",
    answer: "el.textContent = ''",
  },
  {
    question: "Quelle propriété permet de masquer un élément en CSS ?",
    answer: "el.style.display = 'none'",
  },
  {
    question: "Quelle méthode permet de créer un nouvel élément ?",
    answer: "document.createElement('div')",
  },
  {
    question:
      "Quelle méthode permet de créer un nouveau texte dans un document ?",
    answer: "document.createTextNode('')",
  },
  {
    question: "Quelle méthode permet d'ajouter un enfant à un élément ?",
    answer: "el.appendChild()",
  },
  {
    question: "Quelle méthode permet de supprimer un élément du DOM ?",
    answer: "el.remove()",
  },
  {
    question: "Quelle méthode permet de réagir à un clic sur un élément ?",
    answer: "el.addEventListener('click', () => {})",
  },
  {
    question: "Quelle méthode permet de réagir à un changement d'élément ?",
    answer: "el.addEventListener('change', () => {})",
  },
  {
    question:
      "Quelle méthode permet de réagir à un événement de saisie sur un champ ?",
    answer: "el.addEventListener('input', () => {})",
  },
  {
    question: "Quelle méthode permet de réagir à l'envoi d'un formulaire ?",
    answer: "el.addEventListener('submit', () => {})",
  },
  {
    question:
      "Quelle méthode permet de réagir à un événement de touche sur un élément ?",
    answer: "el.addEventListener('keydown', () => {})",
  },
  {
    question:
      "Quelle méthode permet de réagir à un événement de relâchement d'une touche ?",
    answer: "el.addEventListener('keyup', () => {})",
  },

  // Méthodes sur les objets itérables (Array, Typed Arrays)
  {
    question:
      "Quelle méthode permet de trouver le premier élément d'un tableau qui satisfait une condition ?",
    answer: ".find()",
  },
  {
    question:
      "Quelle méthode permet de trier un tableau dans un ordre spécifique ?",
    answer: ".sort()",
  },
  {
    question:
      "Quelle méthode permet de filtrer un tableau en fonction d'une condition ?",
    answer: ".filter()",
  },
  {
    question:
      "Quelle méthode permet de créer un nouveau tableau contenant les résultats d'une fonction sur chaque élément ?",
    answer: ".map()",
  },
  {
    question:
      "Quelle méthode permet de fusionner tous les éléments d'un tableau en une seule chaîne ?",
    answer: ".join('')",
  },
  {
    question:
      "Quelle méthode permet de trouver l'index d'un élément dans un tableau ?",
    answer: ".indexOf()",
  },
  {
    question:
      "Quelle méthode permet d'inverser l'ordre des éléments dans un tableau ?",
    answer: ".reverse()",
  },
  {
    question:
      "Quelle méthode permet d'ajouter un élément à la fin d'un tableau ?",
    answer: ".push()",
  },
  {
    question:
      "Quelle méthode permet de retirer un élément à la fin d'un tableau ?",
    answer: ".pop()",
  },
  {
    question:
      "Quelle méthode permet d'ajouter un élément au début d'un tableau ?",
    answer: ".unshift()",
  },
  {
    question:
      "Quelle méthode permet de retirer un élément au début d'un tableau ?",
    answer: ".shift()",
  },

  // Ajout de questions supplémentaires pour compléter les 100
  {
    question:
      "Quelle méthode permet de récupérer une sous-chaîne d'une chaîne ?",
    answer: ".substring()",
  },
  {
    question:
      "Quelle méthode permet de vérifier si une chaîne contient une autre chaîne ?",
    answer: ".includes()",
  },
  {
    question:
      "Quelle méthode permet de remplacer les caractères d'une chaîne par un autre caractère ?",
    answer: ".replaceAll()",
  },
  {
    question:
      "Quelle méthode permet de convertir une chaîne en tableau de caractères ?",
    answer: ".split('')",
  },
  {
    question:
      "Quelle méthode permet de renvoyer un nombre arrondi au nombre entier supérieur ?",
    answer: "Math.ceil()",
  },
  {
    question: "Quelle méthode permet de renvoyer une valeur absolue ?",
    answer: "Math.abs()",
  },
  {
    question:
      "Quelle méthode permet de retourner un tableau contenant les éléments distincts d'un tableau ?",
    answer: ".new Set()",
  },
  {
    question:
      "Quelle méthode permet de rechercher une clé spécifique dans un tableau ?",
    answer: ".findIndex()",
  },
  {
    question: "Quelle méthode permet de formater une chaîne de caractères ?",
    answer: ".padStart()",
  },
  {
    question:
      "Quelle méthode permet de vérifier si un tableau contient un élément ?",
    answer: ".includes()",
  },
  {
    question:
      "Quelle méthode permet d'exécuter une fonction sur chaque élément d'un tableau ?",
    answer: ".forEach()",
  },
  {
    question: "Quelle méthode permet de transformer une chaîne en majuscules ?",
    answer: ".toUpperCase()",
  },
  {
    question: "Quelle méthode permet de combiner deux ou plusieurs tableaux ?",
    answer: ".concat()",
  },
  {
    question:
      "Quelle méthode permet de supprimer le dernier élément d'un tableau ?",
    answer: ".pop()",
  },
  {
    question:
      "Quelle méthode permet de vérifier si une chaîne commence par une autre chaîne ?",
    answer: ".startsWith()",
  },
  {
    question:
      "Quelle méthode permet de vérifier si une chaîne se termine par une autre chaîne ?",
    answer: ".endsWith()",
  },
  {
    question:
      "Quelle méthode permet de diviser un tableau en plusieurs sous-tableaux ?",
    answer: ".slice()",
  },
  {
    question:
      "Quelle méthode permet de créer un tableau à partir d'un objet iterable ?",
    answer: "Array.from()",
  },
  {
    question:
      "Quelle méthode permet de vérifier si un élément existe dans un tableau ?",
    answer: ".some()",
  },
  {
    question:
      "Quelle méthode permet de concaténer un tableau avec un autre tableau ?",
    answer: ".concat()",
  },
  {
    question: "Quelle méthode permet de convertir un tableau en une chaîne ?",
    answer: ".join()",
  },
];
export default flashcardsData;
