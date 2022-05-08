import HeaderLine from "../header-line/header-line.component.jsx";

import "./section-block.styles.scss";

const SectionBlock = ({ title, tagId, children }) => {
  return (
    <section className="section-flex" id={tagId}>
      <HeaderLine />
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
};

export default SectionBlock;
