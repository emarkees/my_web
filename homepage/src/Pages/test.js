import React, { useState} from 'react'


function test() {
    const [color, setColor] = useState();

  return (
    <div>
        <h1>My favourite color is {color} !!</h1>
        <button className='txt' onClick={() => setColor=(blue)}>blue</button>
    </div>
  )
}
p
export default test