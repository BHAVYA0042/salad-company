import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SummItem from './summary';
import {useSelector,useDispatch} from "react-redux";
import { cart_actions, post_actions,order_actions } from '../../store/main';
import OrderItem from './orderInfo';
import classes from  "./landing.module.css";
import Button from '../sections/Button';
function PostPay(){
  const order_info=useSelector((state)=>state.posted.order_data);
  const cartList = useSelector((state) => state.ordering.items);
  const dispatch=useDispatch(); 
  const isSuccessful=useSelector((state)=>state.posted.isDone);

  function reset(){
    dispatch(post_actions.reset()); 
    dispatch(cart_actions.toggleCart());
    dispatch(order_actions.emptyCart());
    dispatch(cart_actions.toggleRazor());
  }
  
  return(
    <div>
      <header className={classes.header}>
        <h2>Order Summary</h2>
      </header>
      <div className={classes.validate}>
        <CheckCircleOutlineIcon style={{ 
          height: '60px', width: '60px' , color:'#4caf50',margin:'10px'
          }}/>
        {isSuccessful ?
            <h3>Super! Your Order has been confirmed</h3>:
            <h3>Sorry! Order was not successful.</h3>
        }
      </div>

      <div className={classes.main_div}>
        <h3>Order Details</h3>

        <div className={classes.order_item}>
          {cartList.map((item) => {
            return (
              <SummItem
                key={item.id}
                id={item.id}
                title={item.name}
                quantity={item.quantity}
              />
            );
          })}
        </div>

        <div className={classes.order_info}>
          {order_info.map((item)=>{
            return(
              <OrderItem
                key={item.id}
                id={item.id}
                money={item.amount}
              />
            )
          })}
        </div>

      </div>
      <Button 
        command={reset}
        content="Close"
        class="green"
      />
    </div>
  )
}

export default PostPay;
