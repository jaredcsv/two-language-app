import { useTranslateArray } from "../../hooks/useTranslates/useTranslateArray";
import productsData from "/src/data/products-data.json";
import "./CardList.css";
import Card from "../Card/Card";

function CardList() {
  const productsTranslatedData = useTranslateArray(productsData.products);

  return (
    <section className="products-section">
      {productsTranslatedData.map((product) => (
        <Card 
          key={product.id} 
          id={product.id}
          name={product.name} 
          image={product.image}
          description={product.description}
          categories={product.categories}
          rating={product.rating}
          price={product.price}
          discount={product.discount}
          inStock={product.inStock}
        />
      ))}
    </section>
  );
}

export default CardList;
