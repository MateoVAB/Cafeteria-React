import React from 'react'
import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList'
import Item from '../Item'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Products from '../Products'


export const ItemListContainer = ({texto}) => {
   const [data, setData] = useState([])

   const {categoriaId} = useParams();


   useEffect(() => {
     const querydb = getFirestore();
     const queryCollection = collection(querydb, 'productos')
     if (categoriaId) {
      const queryFilter = query(queryCollection, where('category', '==', categoriaId))
      getDocs(queryFilter)
       .then(res => setData(res.docs.map(Products => ({ id: Products.id, ...Products.data( )}))))
     } else{
      getDocs(queryCollection)
       .then(res => setData(res.docs.map(Products => ({ id: Products.id, ...Products.data( )}))))
     }
     
   }, [categoriaId])
   
  
  
  
  
  return (
    <>
     <ItemList data={data} />
    </>
  )
}

export default ItemListContainer