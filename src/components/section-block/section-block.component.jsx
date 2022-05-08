import HeaderLine from "../header-line/header-line.component.jsx";

import AboutSvg from "../../assets/images/about.svg";

import "./section-block.styles.scss";

const SectionBlock = () => {
  return (
    <section className="section-flex" id="about">
      <HeaderLine />
      <div className="content">
        <div className="content-picture">
          <img src={AboutSvg} alt="coffee and bakery shop" />
        </div>

        <div className="content-text">
          <h3>Confections You Grew Up With</h3>
          <p>
            Carli’s Shoppe is a bakery and retail store in Pawnee, Indiana,
            where you can enjoy a selection of traditional and international
            style confections made from scratch. Order on the spot, or online
            for takeout!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionBlock;
