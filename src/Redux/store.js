import { createStore } from "redux";
import cartreducer from "./reducer/cartreducer";



const store=createStore(cartreducer);


export default store;