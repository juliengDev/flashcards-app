# Flashcards App 📚

![Flashcards App](/public/images/flashCard-app.png)

Une application web de flashcards pour faciliter vos révisions. Créez et étudiez vos propres cartes de révision de manière interactive.

## 🚀 Fonctionnalités

- Interface utilisateur moderne et intuitive
- Personnalisation facile des flashcards
- Compatible mobile et desktop
- Basé sur Next.js et Tailwind CSS

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn

## 🛠️ Installation

1. Clonez le dépôt :

```bash
git clone [url-du-repo]
cd flashcards-app
```

2. Installez les dépendances :

```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Personnalisation des Flashcards

Les données des flashcards sont stockées dans le fichier `data/flashcardsData.js` à la racine du projet. Pour ajouter vos propres questions, éditez simplement ce fichier en suivant le format existant.

Exemple de structure :

```javascript
export const flashcardsData = [
  {
    question: "Votre question ici",
    answer: "Votre réponse ici",
  },
  // Ajoutez autant de cartes que nécessaire
];
```

## 🔧 Technologies Utilisées

- [Next.js](https://nextjs.org/) (v15.0.3) - Framework React
- [React](https://reactjs.org/) (v19.0.0-rc)
- [Tailwind CSS](https://tailwindcss.com/) (v3.4.1) - Framework CSS
- [@shadcn/ui](https://ui.shadcn.com/) (v0.0.4) - Composants UI
- [Lucide React](https://lucide.dev/) (v0.460.0) - Icônes
- TypeScript - Support du typage statique

## 💻 Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
