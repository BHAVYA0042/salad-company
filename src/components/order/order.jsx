import {React} from "react";
import Veg from "./Veg_card";
import Non_veg from "./Non_veg_card";
import {data,veg_data} from "./order_data";

function Order(){
  function createVegCard(obj){
    return (
      <Veg
        key={obj.num}
        id={obj.num}
        src={obj.img}
        title={obj.name}
        desc={obj.description}
        price={obj.price}
      />
    );
  }

  function createCard(obj){
    return (
      <Non_veg
        key={obj.num}
        id={obj.num}
        src={obj.img}
        title={obj.name}
        desc={obj.description}
        price={obj.price}
      />
    );
  }
  // props.onAdd(orders);
  return(
    <div className="container3">
      <h1 id="jump_here">OUR DELICACIES</h1>


      <div className="menu_veg">
        <div className="opac">
        </div>
        <div className="grid_veg">
          {veg_data.map(createVegCard)}
        </div>
      </div>

      <div className="menu_non_veg">
        <div className="opac1">
        </div>
        <div className="grid_non_veg">
          {data.map(createCard)}
          <div className="nv_menu card25" >
          </div>
        </div>
      </div>

    </div>

  );
}
export default Order;
