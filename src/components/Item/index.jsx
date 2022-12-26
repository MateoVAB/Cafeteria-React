import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Item = ({info}) => {
  return (
    <NavLink to="detalle/:info.Id" className="granos">
      <img className='detalle.image' src={info.image} alt="" />
      <p>{info.name}</p>
      </NavLink>
      );
}

export default Item