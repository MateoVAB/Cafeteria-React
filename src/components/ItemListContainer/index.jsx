import React from 'react'
import { useEffect, useState } from 'react'
import ItemCount from '../ItemCount'
import { useParams } from 'react-router-dom'


const granos = [
  
  {
    id: 1,
    price: 250,
    amount: 0,
    name: "Granos de Cafe",
    img: "https://p4.wallpaperbetter.com/wallpaper/984/541/248/grains-coffee-heap-white-background-wallpaper-preview.jpg",
    category: "granos"
},

{
    id: 3,
    price: 200,
    amount: 0,
    name: "Avena",
    img: "https://www.gemadistribuidora.com.ar/wp-content/uploads/2020/06/avena-tra.jpg",
    category: "granos"

},
{
  id: 2,
  price: 350,
  amount: 0,
  name: "Balanza",
  img: "http://d2r9epyceweg5n.cloudfront.net/stores/093/002/products/croma-0798d71c7ef4d8af0315131673896096-640-0.jpg",
  category: "extras"

},

{
 id: 4,
 price: 580,
 amount: 0,
 name: "Trituradora de Cafe",
 img: "https://http2.mlstatic.com/D_NQ_NP_735696-MLA51505858008_092022-W.jpg",
 category: "extras"
}
]



export const ItemListContainer = () => {
   const [data, setData] = useState([])

   const {categoriaId} = useParams();


   useEffect(() => {
     const getData = new Promise(resolve => {
      setTimeout(() => {
         resolve(granos);
      }, 2000);
     });
     if (categoriaId) {
      getData.then(res => setData(res.filter(granos => granos.category === categoriaId)))
     } else{
      getData.then(res => setData(res));
     }
     getData.then(res => setData(res));
   }, [categoriaId])
   
  
  
  
  
  return (
    <>
     
 
    </>
  )
}

export default ItemListContainer