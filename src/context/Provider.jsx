import { useState } from "react";
import AppContext from "./AppContext";
import PropTypes from "prop-types";

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const value = {
    products,
    setProducts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;
