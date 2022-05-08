import "./card.styles.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className={item.classNames}>
        <img src={item.imgSrc} alt={item.subHeader} />
      </div>
      <h3>{item.subHeader}</h3>
      {item.para && <p>{item.para}</p>}
    </div>
  );
};

export default Card;
