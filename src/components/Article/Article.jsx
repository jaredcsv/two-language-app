import { useTranslateObject } from "../../hooks/useTranslates/useTranslateObject";
import ArticleText from "./article-text.json";
import "./Article.css";

function Article() {
  const {title, content, info} = useTranslateObject(ArticleText);

  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="info">{info}</div>
    </article>
);
}

export default Article;
