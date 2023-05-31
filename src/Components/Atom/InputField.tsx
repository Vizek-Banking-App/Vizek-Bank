<<<<<<< HEAD
=======
import "./Atoms.scss"

>>>>>>> 5ad457554fed930988e01a013ab8c05ce2fe281d
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
      <div className="inputField">
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
