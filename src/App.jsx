import "./App.css";
import Article from "./components/Article/Article";
import Button from "./components/Button/Button";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Article />
        <Button />
      </LanguageProvider>
    </>
  );
}

export default App;
