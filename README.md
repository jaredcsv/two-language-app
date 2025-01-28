# Two-Language App

A simple web application built with ReactJS and Vite that supports multiple languages. The app allows users to toggle between different languages (English and Spanish) to view content in both languages.

>❗ This project is part of my blog at medium, to see more go to: 

## Technologies Used

- ReactJS: A JavaScript library for building user interfaces.
- Vite: A fast build tool for modern web projects that enables fast development and optimized production builds.
- Context API: Used for managing global state like the selected language.
- useContext and useMemo: For handling translations dynamically based on the selected language.

## Getting Started
1. Clone the repository

```bash
git clone https://github.com/jaredcsv/two-language-app.git
```

```bash
cd two-language-app
```

2. Install dependencies

Make sure you have Node.js installed. Then, run the following command to install the required dependencies:

```bash
npm install
```
3. Start the development server

Once the dependencies are installed, run the following command to start the Vite development server:

```bash
npm run dev
```

This will start the application on http://localhost:3000.
4. Open the app in your browser

Navigate to http://localhost:3000 in your browser to see the app in action.

## Language Switching

The app uses the Context API to store the current language state (en or es). You can toggle between these languages, and the text content will update accordingly. The translations are provided through objects with keys for both English (en) and Spanish (es).
Example of translation object:

```json
"clave_principal": {
  "codigo_idioma_1": "Texto en el idioma 1",
  "codigo_idioma_2": "Texto en el idioma 2"
}
```

### Find in medium as [jaredcsv](https://medium.com/@jaredcsv)
