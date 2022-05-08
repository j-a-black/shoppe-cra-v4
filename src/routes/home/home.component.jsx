import Hero from "../../components/hero/hero.component";
import SectionBlock from "../../components/section-block/section-block.component";
import Content from "../../components/content/content.component";
import Grid from "../../components/grid/grid.component";
import CardList from "../../components/card-list/card-list.component";

import { about, servicesData, galleryData } from "../../data";
import Form from "../../components/form/form.component";

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionBlock title={null} tagId="about">
        <Content data={about} />
      </SectionBlock>
      <SectionBlock title="Treat Yourself to Our Selection" tagId="selection">
        <Grid>
          <CardList data={servicesData} />
        </Grid>
      </SectionBlock>
      <SectionBlock title="Popular Items" tagId="gallery">
        <Grid>
          <CardList data={galleryData} />
        </Grid>
      </SectionBlock>
      <SectionBlock title="Reach Out and Say Hi" tagId="contact">
        <Form />
      </SectionBlock>
    </div>
  );
};

export default Home;
