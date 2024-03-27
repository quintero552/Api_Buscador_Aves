import { Form, Button, InputGroup } from 'react-bootstrap'

const Buscador = ({ funcionBuscar, search }) => {
  const handleSearchChange = (e) => {
    funcionBuscar(e.target.value)
  }

  return (
    <Form className='d-flex'>
      <InputGroup>
        <Form.Control
          type='search'
          placeholder='Busqueda de Ave'
          className='me-2'
          aria-label='Search'
          value={search}
          onChange={handleSearchChange}
        />
        <Button variant='outline-success' type='submit'>
          Search
        </Button>
      </InputGroup>
    </Form>
  )
}

export default Buscador
