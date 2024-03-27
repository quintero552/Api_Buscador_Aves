// import { useState } from 'react'
import './App.css'
import React, { useState } from 'react'
import MiApi from './components/MiApi'
import Cabecera from './components/Cabecera'

const App = () => {
  const [search, setSearch] = useState('')

  const funcionBuscar = (terminoDeBusqueda) => {
    setSearch(terminoDeBusqueda)
  }
  const gridTemplate = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, auto)',
    padding: '20px'
  }
  return (
    <>
      <Cabecera funcionBuscar={funcionBuscar} search={search} />
      <MiApi gridStyles={gridTemplate} />
    </>
  )
}

export default App
