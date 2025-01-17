import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        const intervalID = setInterval(() => {
            if(count<100)
            setCount(count+1)
        },10);
        return ()=> clearInterval(intervalID)
    })

    return (
    <div>{count}</div>
  )
}

export default Counter