export default function FormField(props) {
  return (
    <div className='form-field'>
      <input
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        type={props.type}
      />
      {/* {props.value} */}
    </div>
  );
}
