import React, { useState } from 'react'

export const Contador = () => {

  const [number, setNumber] = useState(0);

  // const acumular = (numero: number)=>{
  //   setNumber(number+numero);


  // }

  return (
    <>
    <h3>Contador <small>{number}</small></h3>
    <button className='btn btn-primary' onClick={()=> setNumber(number+1)} >
+1
    </button>
    &nbsp;
    <button className='btn btn-primary' onClick={()=> setNumber(number-1)} >
-1
    </button>
    </>
  )
}
