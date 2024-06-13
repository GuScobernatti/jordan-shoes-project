import BrandSection from "../brandSection/BrandSection";
import { FaTruckFast } from "react-icons/fa6";

import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="freeFreight">
        <FaTruckFast className="truckIcon" />
        <h2>Frete grátis para todo o Brasil</h2>
      </div>

      <BrandSection />
    </header>
  );
}

export default Header;
