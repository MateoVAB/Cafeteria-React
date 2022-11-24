import React from 'react'
import { Link } from 'react-router-dom'

const Item = () => {
  return (
    <Link to={'/detalle/${info.id}'} className="granos">
      <img src={info.image} alt="" />
      <p>{info.name}</p>
  
      </Link>
      )
}

export default Item