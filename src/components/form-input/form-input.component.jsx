import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" {...otherProps} />
      <label className="form-label">{label}</label>
    </div>
  );
};

export default FormInput;
