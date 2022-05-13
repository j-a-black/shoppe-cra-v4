import PageBanner from "../../components/page-banner/page-banner.component";

import BannerSweets from "../../assets/images/banner-sweets.webp";

import SectionBlock from "../../components/section-block/section-block.component";
import Grid from "../../components/grid/grid.component";
import ProductList from "../../components/product-list/product-list.component";

import { products } from "../../data";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <div>
      <PageBanner bkgImg={BannerSweets} />
      <SectionBlock>
        <Grid>
          <ProductList products={products} />
        </Grid>
      </SectionBlock>
    </div>
  );
};

export default Shop;
