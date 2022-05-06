import {React,useState} from "react";
import { order_actions } from "../../store/main";
import {useDispatch, useSelector} from "react-redux";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function Veg(props){
  const [quantity,setQuantity]=useState(0);
  const dispatch=useDispatch();
  const setToZero=useSelector((state)=>state.posted.isReset);
  console.log(setToZero);
  function handleSub(){
    dispatch(order_actions.removeItemFromCart(props.id));
    setQuantity(quantity-1); 
    
  }
  function handleAdd(){
    dispatch(order_actions.addItemToCart({
      id:props.id,
      title:props.title,
      price:props.price,
    }));
    setQuantity(quantity+1)
  };
  // if(setToZero){
  //   setQuantity(0);
  // }
  return(
    <div className="menu card1" id={props.id}>
      <img className="khana" src={props.src} alt="" />
      <img className="veg_logo" src="images\veg_Sign.jpg" alt="" />
      <div className="card_bottom">  
        <span>{props.title}</span>
        <p>{props.desc}</p>
        <h3><CurrencyRupeeIcon/>{props.price}</h3>
      </div>
   
      <div className="mid_box">
        <div className="remove">
          <strong onClick={handleSub}>-</strong>
        </div>
        <div className="amount">
        <strong>{quantity}</strong>
        
        </div>
        <div className="add">
          <strong onClick={handleAdd}>+</strong>
        </div>

      </div>
    </div>
  );
}

export default Veg;
