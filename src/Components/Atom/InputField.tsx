type inputType = {
  type: string;
  label: string;
  placeholder: string;
  for: string;
  id: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function InputField(props: inputType) {
  return (
    <>
      <div>
        <label htmlFor={props.for}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          onChange={props.onchange}
        />
      </div>
    </>
  );
}
