import {React} from "react";
import Cart from "../Cart/MainCart";
import {useDispatch, useSelector} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { cart_actions } from "../../store/main";
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar,Container,Nav,NavDropdown,Button} from "react-bootstrap";

import {data,veg_data} from "./../order/order_data";


function Navigate(){
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
      <Navbar className="navbar" expand="lg">
      <Container fluid className="contain">
        <Navbar.Brand href="#home" className="mr-0 brand">
          <i className="fas fa-leaf fa-3x"></i>
          <br />
          <h3>TheSaladCompany</h3>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className="nav_link">
          <Nav >
            <NavDropdown title="MENU" id="basic-nav-dropdown" >
              {veg_data.map((item)=>{
                return(
                  <NavDropdown.Item href={`#${item.num}`}>{item.name}</NavDropdown.Item>
                )
              })}
              <NavDropdown.Divider />
              {data.map((item)=>{
                return(
                  <NavDropdown.Item href={`#${item.num}`}>{item.name}</NavDropdown.Item>
                )
              })}              
            </NavDropdown>
            <Nav.Link className="link" href="#cont">CONNECT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link className="link" id="tog_section" >
          <ShoppingCartIcon fontSize= 'large' onClick={pinch}/>
          <div className="cartQuantBack"><p className="cartQuant">{total}</p></div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
        </Nav.Link>
        
        
      </Container>
    </Navbar>

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
