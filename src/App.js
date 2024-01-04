import { useEffect, useState } from 'react';
import './App.css';
import Navbarr from './Components/Navbarr';
import axios from 'axios';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Shoppage from './Components/Shoppage';
import Cartpage from './Components/Cartpage';


function App() {
 
const [cartselection,setcartselection]=useState([]);
 

  return (
    <div className="App">
     <Router>
  <Navbarr/>

<Routes>
  <Route path="/" element={<Shoppage cartselection="cartselection" setcartselection="setcartselection"/>}/>
  <Route path="/cart" element={<Cartpage cartselection="cartselection" setcartselection="setcartselection"/>} />
</Routes>
     
     
     </Router>
 

    </div>
  );
}

export default App;
