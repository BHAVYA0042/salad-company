import {React} from "react";
import Navigate from "./components/sections/navigation";
import Service from "./components/sections/services";
import Order from "./components/order/order";
import Review from "./components/review/review";
import Foot from "./components/sections/footer";



function App(){

  return(
    <div>
    <Navigate/>
    <Service/>
    <Order />
    <Review />
    <Foot />
  </div>
  );
}
export default App;
