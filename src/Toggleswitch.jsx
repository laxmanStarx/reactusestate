import React, { useState } from 'react'

const Toggleswitch = () => {
    const [toggle, setToggle] = useState(10)
  return (

    <div>
        <p style={{fontSize: `${toggle}px`, cursor:"pointer"}}>welcome</p>

        <button style={{cursor:"pointer"}}onClick={()=>setToggle(toggle+1)}>change fontSize</button>
    </div>

  )
}

export default Toggleswitch