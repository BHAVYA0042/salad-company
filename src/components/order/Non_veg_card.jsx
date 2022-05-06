import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { order_actions } from "../../store/main";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
function Non_veg(props){
  const [quantity,setQuantity]=useState(0);
  console.log(quantity);
  const dispatch=useDispatch();
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
    setQuantity(quantity+1);
  };

  return(
    <div class="nv_menu card21" id={props.id}>
      <img class="khana" src={props.src} alt="" />
      <img class="non_veg_logo" src="images\non_veg.jpg" alt="" />
      <div className="card_bottom">
        <span>{props.title}</span>
        <p>{props.desc}</p>
        <h3><CurrencyRupeeIcon/>{props.price}</h3>
      </div>
      
      <div class="mid_box">
        <div class="remove">
          <strong onClick={handleSub}>-</strong>
        </div>
        <div class="amount">
          <strong>{quantity}</strong>
        </div>
        <div class="add">
          <strong onClick={handleAdd}>+</strong>
        </div>

      </div>
    </div>
  );
}

export default Non_veg;
