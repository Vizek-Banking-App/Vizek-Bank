type Button = {
    title: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    style: React.CSSProperties
}

export const Button = (prop: Button) => {
  return (
 <button  style={prop.style} onClick={prop.onClick} >{prop.title}</button>
  )
}
