import "./page-banner.styles.scss";

const PageBanner = ({ bkgImg }) => {
  return (
    <div
      className="banner-container "
      style={{ backgroundImage: `url(${bkgImg})` }}
    >
      <div className="banner-overlay grid-center-title">
        <h1 className="header-primary">Order for Takeout</h1>
      </div>
    </div>
  );
};

export default PageBanner;
