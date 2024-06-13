import mySvg from "../../assets/logo.svg";
import "./BrandSection.scss";

function BrandSection() {
  return (
    <section className="brand--section">
      <div className="brand">
        <img src={mySvg} alt="Logo" />
      </div>

      <div className="about">
        <p>A melhor loja de Jordan</p>
        <span>
          O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o
          jogador Michael Jordan.
        </span>
      </div>
    </section>
  );
}

export default BrandSection;
