import "./overlay.styles.scss";

const Overlay = ({
  children,
  toggleDropdown,
  setToggleDropdown,
  handleOnClick,
}) => {
  return (
    <div className="overlay-container">
      <div className="overlay" onClick={handleOnClick}></div>
      {children}
    </div>
  );
};

export default Overlay;
