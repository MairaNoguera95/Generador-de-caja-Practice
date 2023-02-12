import React, { useState } from 'react'
import InputData from './InputData'
import ListaColors from './ListaColors'

const BoxColors = () => {
    const [colores, setColores] = useState([]);
  return (
    <div>
        <InputData colores={colores} setColores = {setColores}/>
        <ListaColors colores={colores} />
        <hr />
    </div>
  )
}
export default BoxColors;