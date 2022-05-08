import "./grid.styles.scss";

import CoffeeBeans from "../../assets/images/coffee-beans.png";
import CoffeeCup from "../../assets/images/coffee-cup.png";
import Cake from "../../assets/images/cake.png";
import Takeout from "../../assets/images/takeout.png";

const Grid = ({ children }) => {
  return (
    <div className="grid-container">
      <div className="card">
        <div className="card-img">
          <img src={CoffeeBeans} alt="Coffee Beans" />
        </div>
        <h3>Coffee Beans</h3>
        <p>
          Our coffee is imported directly from the farmers and roasted in-house
        </p>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={CoffeeCup} alt="Coffee Beans" />
        </div>
        <h3>Coffee</h3>
        <p>Fresh and authentic flavors that you can taste in every sip</p>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={Cake} alt="Coffee Beans" />
        </div>
        <h3>Sweets</h3>
        <p>Carli's Shoppe is the perfect place to satisfy your cravings</p>
      </div>
      <div className="card">
        <div className="card-img">
          <img src={Takeout} alt="Coffee Beans" />
        </div>
        <h3>Takeout</h3>
        <p>
          On the go? Order online and we'll have your order ready for pickup!
        </p>
      </div>
    </div>
  );
};

export default Grid;
