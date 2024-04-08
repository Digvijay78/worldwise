import styles from "./Button..module.css"

const Button = ({children, onClick, type}) => {
    
  return (
   <button onClick={onClick} className="" >{children}</button>
  )
}

export default Button