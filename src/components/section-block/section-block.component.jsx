import Content from "../content/content.component.jsx";
import HeaderLine from "../header-line/header-line.component.jsx";

import { about } from "../../data.js";

import "./section-block.styles.scss";

const SectionBlock = ({ title, tagId, children }) => {
  return (
    <section className="section-flex" id={tagId}>
      <HeaderLine />
      {title && <h2>{title}</h2>}
      {/* <Content data={about} /> */}
      {children}
    </section>
  );
};

export default SectionBlock;
