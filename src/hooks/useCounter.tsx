import { useState } from "react";

export const useCounter = (inicial:number) => {

  const [number, setNumber] = useState(0);

  const acumular = (numero: number)=>{
    setNumber(number+numero);

  }
  return{
number,acumular
  }

}
