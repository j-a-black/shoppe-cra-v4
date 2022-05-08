// import AboutSvg from "../../assets/images/about.svg";

import "./content.styles.scss";

const Content = ({ data }) => {
  return (
    <div className="content">
      <div className="content-picture">
        <img src={data.src} alt="coffee and bakery shop" />
      </div>

      <div className="content-text">
        <h3>{data.subHeader}</h3>
        <p>{data.para}</p>
      </div>
    </div>
  );
};

export default Content;
