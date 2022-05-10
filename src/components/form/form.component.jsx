import FormInput from "../form-input/form-input.component";
import "./form.styles.scss";

const Form = () => {
  return (
    <form className="form">
      <h3>Sign Up for our Monthly Newsletter!</h3>
      <p>
        Join our mailing list to stay up-to-date on our latest specials and menu
        changes
      </p>
      <div className="form-fields-container">
        <FormInput
          label="name"
          type="text"
          required
          name="name"
          placeholder=" "
        />
        <FormInput
          label="email"
          type="email"
          required
          name="email"
          placeholder=" "
        />
      </div>
    </form>
  );
};

export default Form;
