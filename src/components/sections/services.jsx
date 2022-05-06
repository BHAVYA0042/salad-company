import React from "react";
import classes from "./service.module.css";
function Service(){
  return(
    <div className={classes.container2}>
        <h1>Our Services</h1>
        <div className={classes.cards}>
          <div className={classes.carding} >
            <img className={classes.order} src="images/chicken_salad-removebg-preview.png" alt=""/>
            <h3>Food Ordering</h3>
            <p>We provide food ordering on your fingertips.
            Order whenever you want wherever you want.</p>
          </div>
          <div className={classes.carding}>
            <img className={classes.fresh} src="images/100-organic-food-certified-label_1017-19669.jpg" alt="" />
            <h3>Freshly Tossed</h3>
            <p>We use farm fresh 100% organic veggies.
            So you get the best taste and nutrition.</p>
          </div>
          <div className={classes.carding} id="delivery">
            <img className={classes.delivery} src="images/dribbble_post-01-removebg-preview.png" alt="" />
            <h3>Fast Delivery</h3>
            <p>Our delivey partners maintain proper hygine.
            Get your salad at your doorstep.</p>
          </div>
        </div>
      </div>
  );
}
export default Service;
