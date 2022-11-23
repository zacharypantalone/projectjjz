export default function FormField(props) {
  return (
    <div className={props.field}>
      <label className='form__label'>{props.field}</label>
      <input
        value={props.user.firstname}
        onChange={props.handleChange}
        type={props.field}
        id={props.field}
        className='form__input'
        placeholder={props.field}
      />
      {props.user.firstname}
    </div>
  );
}
