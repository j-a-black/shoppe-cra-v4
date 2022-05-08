import Content from "../content/content.component.jsx";
import HeaderLine from "../header-line/header-line.component.jsx";

import { about } from "../../data.js";

import "./section-block.styles.scss";

const SectionBlock = () => {
  return (
    <section className="section-flex" id="about">
      <HeaderLine />
      <Content data={about} />
    </section>
  );
};

export default SectionBlock;
