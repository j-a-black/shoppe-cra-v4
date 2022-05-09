import FormInput from "../form-input/form-input.component";
import "./form.styles.scss";

const Form = () => {
  return (
    <div className="form">
      <h3>Sign Up for our Monthly Newsletter!</h3>
      <p>Join our mailing list to stay up-to-date on our latest specials!</p>
      <form>
        <FormInput
          label="name"
          type="text"
          className="form-input"
          required
          name="name"
        />
        <FormInput
          label="email"
          type="email"
          className="form-input"
          required
          name="email"
        />
      </form>
    </div>
  );
};

export default Form;
