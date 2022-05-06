import classes from "./landing.module.css";
function OrderItem(props){
  return(
    <ul className={classes.right}>
      <li><h4>Order ID:</h4>{props.id}</li>
    </ul>
  )
}

export default OrderItem;
