import Line from "../../assets/images/line.png";

import "./header-line.styles.scss";

const HeaderLine = () => {
  return (
    <div className="line-divider">
      <img src={Line} alt="straight line" />
    </div>
  );
};

export default HeaderLine;
