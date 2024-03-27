import { useEffect, useState } from 'react'
import Buscador from './Buscador'

const MiApi = ({ gridStyles }) => {
  const [animales, setAnimales] = useState([])
  const [tablaBusqueda, setTablaBusqueda] = useState([])
  const [search, setSearch] = useState('')

  const apiIma = async () => {
    const pokemon = await fetch('https://aves.ninjas.cl/api/birds')
    const res = await pokemon.json()
    setAnimales(res)
    setTablaBusqueda(res)
  }

  useEffect(() => {
    apiIma()
  }, [])

  const funcionBuscar = (terminoDeBusqueda) => {
    setSearch(terminoDeBusqueda)
    filtrar(terminoDeBusqueda)
  }

  const filtrar = (terminoDeBusqueda) => {
    const nuevaLista = tablaBusqueda.filter((elemento) => {
      if (elemento.name.latin.toString().toLowerCase().includes(terminoDeBusqueda.toLowerCase())) {
        return elemento
      }
      return false
    })
    setAnimales(nuevaLista)
  }

  const divStyle = {
    backgroundColor: 'white',
    width: '18rem'
  }

  return (
    <>
      <Buscador funcionBuscar={funcionBuscar} search={search} />
      <div className='grid-container' style={gridStyles}>
        {animales?.map((item) => {
          return (
            <div key={item.uid} className='card' style={divStyle}>
              <img
                src={item.images.main}
                className='card-img-top'
                alt='imagen de ave'
              />
              <div className='card-body'>
                <p className='card-text'>{item.name.latin}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default MiApi
