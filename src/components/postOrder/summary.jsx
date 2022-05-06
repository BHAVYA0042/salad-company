import classes from "./landing.module.css";
function SummItem(props){
  return(

    <ul className={classes.left}>
      <li>
        <h4 className={classes.item1}>{props.title} x{props.quantity}</h4>
      </li>

    </ul>

  )
}
export default SummItem;