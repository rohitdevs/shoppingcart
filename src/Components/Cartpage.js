import React from 'react'

const Cartpage = ({cartselection}) => {
  return (
    <div>
      {
    cartselection && cartselection.map((items)=> (
      <div>
      {items.title}
      </div>
    ))
      }
  
    </div>
  )
}

export default Cartpage;
