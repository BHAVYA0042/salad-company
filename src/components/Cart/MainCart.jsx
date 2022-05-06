import { useSelector,useDispatch } from "react-redux";
import { cart_actions } from "../../store/main";
import PostPay from "../postOrder/Landing";
import Pay from "../sections/payment";
import Item from "./CartItem";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import classes from "./cartItem.module.css";
import Button from "./../sections/Button";

function Cart(props) {
  const cartList = useSelector((state) => state.ordering.items);
  const finalAmount = useSelector((state) => state.ordering.totalBill);
  const dispatch=useDispatch();
  const isRazor=useSelector((state)=>state.toggle.showRazor)
  const isEnd=useSelector((state)=>state.posted.isDone);

  function callPay(event) {
    event.preventDefault();
    dispatch(cart_actions.toggleRazor(finalAmount));

  }

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}></div>
        <div className={classes.modall}>
        {!isEnd && 
          <div>
            <header className={classes.header}>
              <h2>Payment Section</h2>
            </header>
            <div className={classes.content}>
              {cartList.length===0 && 
              <div>
                <ProductionQuantityLimitsIcon style={{ 
                  height: '15vw', width: '15vw', 
                  color:'#E0D8B0',margin:'1.5vw'
                }}/>
                <h2>Cart is Empty</h2>

              </div>
              }
              {cartList.length!==0 && cartList.map((item) => {
                return (
                  <Item
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    price={item.price}
                    totalPrice={item.totalPrice}
                    quantity={item.quantity}
                  />
               );
              })}
            </div>
            {cartList.length!==0 && !isRazor && 
              <Button 
                command={callPay}
                content={`Pay ${finalAmount}`}
              />}
            {isRazor && <Pay />}
          </div>}
          {isEnd && <PostPay />}
        </div>
     
      


    </div>
  );
}
export default Cart;
