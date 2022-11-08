import React from 'react'
import { Header, Navbar, ListContainer } from "./headerStyles"

const HeaderComponent = ({handleSelection, done, pending, todos}) => (
  (
    <Header>
      <Navbar>
        <p>Nombre de la App</p>
      </Navbar>
      <ListContainer>
        <li onClick={() => handleSelection("todos")}>Todas: {todos.length}</li>
        <li onClick={() => handleSelection("finished")}>Terminadas: {done.length}</li>
        <li onClick={() => handleSelection("pending")}>Pendientes: {pending.length}</li>
      </ListContainer>
    </Header>
  )
)

export default HeaderComponent;