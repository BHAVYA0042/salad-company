import React from "react";
import Rev_data from "./rev_data";
import StarIcon from '@mui/icons-material/Star';
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import classes from "./Rev.module.css";

function Review(){

  return(
    <div class={classes.container4}>
      <h1>Our Happy Customers</h1>
      <Carousel className={classes.car}>
      {Rev_data.map(item=>(
        <Carousel.Item className={classes.cust} >
          <img
            src={item.img}
            alt="dp"
          />
          <Carousel.Caption className={classes.description}>
            <h3>{item.name}</h3>
            <span>{item.heading}</span> <br />
            <i> {item.content} </i><br />
            <strong>
              {[...Array(item.rating).keys()].map(num=>(
                <StarIcon style={{color:"#ffeb3b"}}/>
              ))}
            </strong>
          </Carousel.Caption>
        </Carousel.Item>
    ))}
      
      </Carousel>
    </div>
  );
}


        

export default Review;
