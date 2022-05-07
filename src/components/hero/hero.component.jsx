import "./hero.styles.scss";

const Hero = () => {
  return (
    <div className="hero-container grid-center-item" id="home">
      <section className="hero-text-box">
        <h1>
          <span className="header-primary">Carli's Shoppe</span>
          <span className="header-sub">Exquisite Coffee & Desserts</span>
          <span className="header-sub">For People with Exquisite Taste</span>
        </h1>
      </section>
    </div>
  );
};

export default Hero;
