import {React} from "react";
import Cart from "../Cart/MainCart";
import {useDispatch, useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { cart_actions } from "../../store/main";





function Navigate(props){
  const dispacth=useDispatch();
  const total=useSelector((state)=> state.ordering.totalQuantity);
  const showCart=useSelector((state)=>state.toggle.showCart);
  const showModal=useSelector((state)=>state.toggle.showModal);
  
  function pinch(){
    dispacth(cart_actions.toggleCart());
  }
  function hidePay(){
    dispacth(cart_actions.toggleCart());
  }

  return(

    <div className = "container1" >
      {showCart && showModal && <Cart onConfirm={hidePay}/>}
      <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <i className="fas fa-leaf fa-3x"></i>
        <br />
          <h3>TheSaladCompany</h3>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav first">
            <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                MENU
              </a>
              {/* <div className="dropdown-menu" id="navbarDropdown">
                <div className="cat1">
                  <a className="dropdown-item" href="#1">Best Broccoli Salad</a>
                  <a className="dropdown-item" href="#2">Shredded Brussels Salad</a>
                  <a className="dropdown-item" href="#3">Rainbow Orzo Salad</a>
                  <a className="dropdown-item" href="#4">Creamy Vegan Pasta Salad</a>
                  <a className="dropdown-item" href="#5">Sesame Soba Noodles</a>
                  <a className="dropdown-item" href="#6">Healthy Taco Salad</a>
                  <a className="dropdown-item" href="#7">Creamy Greek Salad</a>
                  <a className="dropdown-item" href="#8">classNameic Caprese Salad</a>
                </div>
                <div className="cat2">
                  <a className="dropdown-item" href="#9">Asian Sesame Chicken Salad</a>
                  <a className="dropdown-item" href="#10">Chicken Salad with Plums</a>
                  <a className="dropdown-item" href="#11">Chicken Pasta Salad</a>
                  <a className="dropdown-item" href="#12">Coronation Chicken Salad</a>
                  <a className="dropdown-item" href="#13">Scrambled Egg Salad</a>
                  <a className="dropdown-item" href="#14">Salmon Caesar Salad</a>
                </div>

              </div> */}
            </li>
            <li className="nav-item active dropdown">
              <a className="nav-link dropdown-toggle con" href="#cont">
                CONNECT
              </a>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item doosri">

              <SearchIcon fontSize='large'/>
            </li>
            <li className="nav-item doosri">
              <ShoppingCartIcon fontSize= 'large' onClick={pinch}/>
              <div className="cartQuantBack"><p className="cartQuant">{total}</p></div>
            </li>
          </ul>

        </div>
      </nav>
      <div className="desc">
        <span className="heavy">Delicious food for healthy life.</span>
        <p>We farm,we pluck,we toss & we deliver.</p>
        <a href="#jump_here">
          <button className="ord" type="button" name="button">Order Now</button>
        </a>
      </div>

    </div>

  );
}

export default Navigate;
