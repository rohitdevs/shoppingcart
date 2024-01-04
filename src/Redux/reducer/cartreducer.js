import { ADD_TOCART,DELETE_TOCART } from "../actions/actiontypes";


const initaialState=[];


const cartreducer=(state=initaialState,action)=>{


  if(action.type==ADD_TOCART){
    return [...state,action.payload]
  }
  else if(action.type==DELETE_TOCART)
  {
    return state.filter(cart=>cart.id!=action.payload)
  }
  else 
  return state;
}

export default cartreducer;