import ItemCards from "../itemCards/ItemCards";
import "./ShopItems.scss";

function ShopItems() {
  return (
    <main>
      <div className="title--shopItems">
        <h1>Os melhores em um só lugar</h1>
        <p>
          A marca Jordan na JordanShoes é a escolha certa para os amantes de
          sneakers que buscam estilo e conforto.
        </p>
      </div>

      <ItemCards />
    </main>
  );
}

export default ShopItems;
