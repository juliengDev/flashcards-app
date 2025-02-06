# Flashcards App 📚

![Flashcards App](/public/images/flashCard-app.png)

A web-based flashcard app to help you with your revisions. Create and study your own revision cards interactively.

## 🚀 Features

- Modern and intuitive user interface
- Easy customization of flashcards
- Mobile and desktop compatible
- Built with Next.js and Tailwind CSS

## 📋 Prerequisites

- Node.js (version 18 or above)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:

```bash
git clone [repo-url]
cd flashcards-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customizing Flashcards

Flashcard data is stored in the data/flashcardsData.js file at the root of the project. To add your own questions, simply edit this file following the existing format.

Example structure:

```javascript
export const flashcardsData = [
  {
    question: "Your question here",
    answer: "Your answer here",
  },
  // Add as many cards as needed
];
```

## 🔧 Technologies Used

- [Next.js](https://nextjs.org/) (v15.0.3) - React Framework
- [React](https://reactjs.org/) (v19.0.0-rc)
- [Tailwind CSS](https://tailwindcss.com/) (v3.4.1) - CSS Framework
- [@shadcn/ui](https://ui.shadcn.com/) (v0.0.4) - UI Components
- [Lucide React](https://lucide.dev/) (v0.460.0) - Icônes
- TypeScript - Static typing support

## 💻 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run start` - Starts the production server
- `npm run lint` - Lints the code with ESLint

## 🤝 Contribution

Contributions are welcome! Feel free to:

1.	Fork the project
2.	Create a branch for your feature (git checkout -b feature/AmazingFeature)
3.	Commit your changes (git commit -m 'Add some AmazingFeature')
4.	Push to the branch (git push origin feature/AmazingFeature)
5.	Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.
