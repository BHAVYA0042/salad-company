import {React,Fragment} from "react";
import {useDispatch} from "react-redux";
import {order_actions} from "../../store/main";
import classes from "./cartItem.module.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function Item(props){
  const dispatch=useDispatch();
  function decrease(){
    dispatch(order_actions.removeItemFromCart(props.id));
  }
  function increase(){
    dispatch(order_actions.addItemToCart({
      id:props.id,
      name:props.title,
      price:props.price,
    }))
  }
  return(
    <Fragment>
      <ul className={classes.cart}>
        <li className={classes.item1}>
          <h2 className={classes.title}>{props.title}</h2>
          <p className={classes.tiny}>#Item {props.id}</p>
        </li>
       
        <li className={classes.item2}><h2><CurrencyRupeeIcon/>{props.price}</h2></li>
        <li className={classes.item3}>
          <h2> 
            <button onClick={decrease}>-</button>
            {props.quantity}
            <button onClick={increase}>+</button>
          </h2>
        </li>  
        <li className={classes.item4}>
          <div className={classes.price}>
          <h2><CurrencyRupeeIcon/>{props.totalPrice}</h2>
          </div>
        </li>    
        <br/>
      </ul>
    </Fragment>
  );
}
export default Item;
