import { ADD_TOCART,DELETE_TOCART } from "./actiontypes";

export const addtocart=(cartitem)=>{
  return ({
    type:ADD_TOCART,
    payload:cartitem
  })
}


export const deletetocart=(id)=>{
  return ({
    type:DELETE_TOCART,
    payload:id
  })
}