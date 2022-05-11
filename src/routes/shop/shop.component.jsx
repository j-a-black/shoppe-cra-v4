import PageBanner from "../../components/page-banner/page-banner.component";

import BannerSweets from "../../assets/images/banner-sweets.webp";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <div>
      <PageBanner bkgImg={BannerSweets} />
    </div>
  );
};

export default Shop;
