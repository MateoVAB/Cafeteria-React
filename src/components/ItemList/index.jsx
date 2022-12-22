import React from 'react'
import Item from '../Item'
import ItemListContainer from '../ItemListContainer'
import Products from '../Products'

const ItemList = ({data = []}) => {
   return (
    data.map(granos => <Item key={granos.id} info={granos}/>)
   )
}

export default ItemList