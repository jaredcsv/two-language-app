import "./App.css";
import Article from "./components/Article/Article";
import Button from "./components/Button/Button";
import CardList from "./components/CardList/CardList";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Article />
        <Button />
        <CardList />
      </LanguageProvider>
    </>
  );
}

export default App;
