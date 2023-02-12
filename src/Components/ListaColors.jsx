import React from 'react'
 
const ListaColors = ({ colores }) => {
    return(
        <div className='cuadro'>{colores.map((colores, index)=>
        <h1 className={colores} key = {index}>{colores}</h1> )}</div>
    )
}
export default ListaColors;