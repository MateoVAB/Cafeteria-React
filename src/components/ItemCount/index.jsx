import './itemcount.css';
import React, { useEffect, useState} from 'react'

export const ItemCount = ({initial, stock, onAdd}) => {
    
    const [count, setCount] = useState(parseInt(initial))

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    useEffect (() => {
        setCount(parseInt(initial))
    }, [initial])

    return (
 
    <div className='counter'>
       <button disabled={count <= 1} onClick={decrease} >-</button>
       <span>{count}</span>
       <button enabled={count >= 1} onClick={increase} >+</button>
       <div>
           <button disabled={stock <= 0} onClick={() => onAdd(count)}>Terminar</button>
       </div>
    </div>




    )










}

export default ItemCount