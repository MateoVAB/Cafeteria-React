import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'

const datos =
{
  id: 1,
  price: 250,
  amount: 0,
  name: "Granos de Cafe",
  img: "https://p4.wallpaperbetter.com/wallpaper/984/541/248/grains-coffee-heap-white-background-wallpaper-preview.jpg",
};


const ItemDetailContainer = () => {
  
  const[data, setData] = useState({});
  useEffect(() =>{
     const getData = new Promise(resolve =>{
      setTimeout(() => {
        resolve(datos);
      }, 3000);
     })
     getData.then(res =>setData(res))
  }, [])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer