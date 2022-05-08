import Hero from "../../components/hero/hero.component";
import SectionBlock from "../../components/section-block/section-block.component";
import Content from "../../components/content/content.component";
import Grid from "../../components/grid/grid.component";

import { about } from "../../data";

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionBlock title={null} tagId="about">
        <Content data={about} />
      </SectionBlock>
      <SectionBlock title="Treat Yourself to Our Selection" tagId="selection">
        <Grid />
      </SectionBlock>
    </div>
  );
};

export default Home;
