import { useTranslateObject } from "../../hooks/useTranslates/useTranslateObject";
import "./Card.css";
import CardText from "./card-text.json"

function Card(props) {
    const finalPrice = (props.price - props.price * props.discount).toFixed(2);

    const {categories, rating, inStock, outOfStock} = useTranslateObject(CardText);
  
    return (
      <article key={props.id} className="card">
        <img src={props.image} alt={props.name} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-description">{props.description}</p>
          <p className="card-categories">{categories}: {props.categories.join(", ")}</p>
          <p className="card-rating">{rating}: {props.rating} ⭐</p>
          <p className="card-price">
            {props.discount > 0 ? (
              <>
                <span className="original-price">${props.price.toFixed(2)}</span> ${finalPrice}
              </>
            ) : (
              <>${props.price.toFixed(2)}</>
            )}
          </p>
          <p className={`card-stock ${props.inStock ? "in-stock" : "out-of-stock"}`}>
            {props.inStock ? inStock : outOfStock}
          </p>
        </div>
      </article>
    );
  }
  
  export default Card;