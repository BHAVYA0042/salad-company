import {React,useState} from "react";
import Navigate from "./components/sections/navigation";
import Service from "./components/sections/services";
import Order from "./components/order/order";
import Review from "./components/review/review";
import Foot from "./components/sections/footer";

import {useSelector} from "react-redux";

function App(){
  const [some,setSome]=useState(null);

  function getData(maal){
    console.log("this data is form app component",maal)
    setSome(maal)
    console.log(some);
  }
  return(
    <div>
    <Navigate order_data= {some}/>

    <Service/>
    <Order onAdd={getData}/>
    <Review />
    <Foot />
  </div>
  );
}
export default App;
