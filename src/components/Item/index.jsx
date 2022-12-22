import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({info}) => {
  return (
    <Link to={'/detalle/${info.id}'} className="granos">
      <img className='detail.image' src={info.image} alt="" />
      <p>{info.name}</p>
      </Link>
      );
}

export default Item