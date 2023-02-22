import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';

export const ContadorHook = () => {

  const { acumular, number} = useCounter(0)

  return (
    <>
    <h3>Contador with hook: <small>{number}</small></h3>
    <button className='btn btn-primary' onClick={()=> acumular(1)} >
+1
    </button>
    &nbsp;
    <button className='btn btn-primary' onClick={()=> acumular(-1)} >
-1
    </button>
    </>
  )
}
