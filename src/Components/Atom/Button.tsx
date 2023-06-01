import "./Atoms.scss"
type Button = {
    title: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

export const Button = (prop: Button) => {
  return (
 <button className="atom_button" onClick={prop.onClick} >{prop.title}</button>
  )
}
