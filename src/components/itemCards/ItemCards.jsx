import { useContext, useEffect, useState } from "react";
import "./ItemCards.scss";
import AppContext from "../../context/AppContext";

import jordan1 from "../../assets/jordan-1.png";
import jordan2 from "../../assets/jordan-2.png";
import jordan3 from "../../assets/jordan-3.png";
import jordan4 from "../../assets/jordan-4.png";
import jordan5 from "../../assets/jordan-5.png";
import jordan6 from "../../assets/jordan-6.png";
import Loading from "../loading/Loading";

function ItemCards() {
  const { products, setProducts } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setProducts([
        {
          image: jordan1,
          title: "Air Jordan 1 Mid Dutch Green",
          subtitle: "Tênis Air Jordan",
          price: "R$ 1.199,99",
        },
        {
          image: jordan2,
          title: "Air Jordan 1 High Zoom CMFT Tropical Twist",
          subtitle: "Tênis Air Jordan",
          price: "R$ 1.049,00",
        },
        {
          image: jordan3,
          title: "Air Jordan 1 High Snow White",
          subtitle: "Tênis Air Jordan",
          price: "R$ 1.350,00",
        },
        {
          image: jordan4,
          title: `Air Jordan 1 Mid GS "Light Smoke Grey"`,
          subtitle: "Tênis Air Jordan",
          price: "R$ 1.585,00",
        },
        {
          image: jordan5,
          title: "Air Jordan 1 Mid SE Bright Citrus",
          subtitle: "Tênis Air Jordan",
          price: "R$ 949,99",
        },
        {
          image: jordan6,
          title: "Air Jordan 1 Mid Grey Camo",
          subtitle: "Tênis Air Jordan",
          price: "R$ 999,99",
        },
      ]);
      setIsLoading(false);
    };

    fetchProducts();
  }, [setProducts]);

  return (
    (isLoading && <Loading />) || (
      <section className="productCards--section">
        {products.map((product, index) => (
          <div key={index} className="cards">
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="infoProduct-container">
              <p>{product.title}</p>
              <span>{product.subtitle}</span>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </section>
    )
  );
}

export default ItemCards;
