import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'



export const ItemDetail = ({data}) => {
  
 

  return (
   
    <div className="container">
    <div className="detail">
       <img className='detail__image' src={data.image} alt="" />
       <div className="content">
         <p>{data.name}</p>
         
        </div>
       </div>
      </div>  
      
  )
}

export default ItemDetail