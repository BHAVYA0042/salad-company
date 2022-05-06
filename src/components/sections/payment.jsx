import React, { useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux";
import { post_actions } from "../../store/main";
import Button from "./Button";



function Pay() {
  console.log("am i running?");
  const money=useSelector((state)=>state.ordering.totalBill);
  const dispatch=useDispatch();
  
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

    async function displayRazorpay(event){
      event.preventDefault();
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      const data = await fetch("https://salad-company.herokuapp.com/razorpay", {
        method: "POST",
        body:JSON.stringify({money}),
        headers:{
          'Content-Type':'application/json'
        }

      });
      const maal = await data.json();
      console.log(maal);
      function showStuff(){
        dispatch(post_actions.toggleisDone());
        dispatch(post_actions.getOrderData(maal));
      }

      const options = {
        key: "rzp_test_Ocgtk5JsKNQKuA",
        currency: maal.currency,
        amount: money,
        order_id: maal.id,
        name: "Payment Testing",
        description: "Enter \"success@razorpay\"  as UPI ID",
        handler: function (response) {
          if(response.statusCode)
          console.log(response);
          showStuff();
        },
        prefill: {
          name: "RAAM",
          email: "sdfdsjfh2@ndsfdf.com",
          phone_number: "9899999999",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
  }

  return (
    <Button command={displayRazorpay} content='Pay with Razorpay'/>

  )
}

export default Pay;
