import "./App.scss";
import Header from "./components/header/Header";
import ShopItems from "./components/shopItems/ShopItems";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <Header />
      <ShopItems />
    </Provider>
  );
}

export default App;
