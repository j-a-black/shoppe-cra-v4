import "./page-banner.styles.scss";

const PageBanner = ({ bkgImg }) => {
  return (
    <div
      className="banner-container grid-center-title"
      style={{ backgroundImage: { bkgImg } }}
    >
      <h1 className="header-primary">Order for Takeout</h1>
    </div>
  );
};

export default PageBanner;
