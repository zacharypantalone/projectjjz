import '../styles/form.scss';

<style></style>
const FormField = (props) => {
  return (
    <div className='form-field'>
      <input
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  );
}

export default FormField;