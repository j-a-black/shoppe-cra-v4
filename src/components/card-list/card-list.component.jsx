import Card from "../card/card.component";

import "./card-list.styles.scss";

const CardList = ({ data }) => {
  const renderCardList = data.map((item) => <Card key={item.id} item={item} />);
  return <>{renderCardList}</>;
};

export default CardList;
