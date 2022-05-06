import classes from "./Button.module.css";
function Button(props){
  return(
    <button className={props.class? classes.green :classes.click} onClick={props.command}>
      {props.content}
    </button>
  )
}

export default Button;