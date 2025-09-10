import React from 'react'
import Logo from './_logo'
import Buscador from './_buscador'
import PerfilUsuario from './_perfilUsuario'
import './header.css'

const Header = ({usuario}) => {
  return (
    <section className='header'>
        <div className='header-superior'>
            <Logo /> 
            <PerfilUsuario />
        </div>
        <section className="Bienvenida">
          <h1>Buenas noches {usuario}</h1>
          <p>Te ayudamos a encontrar las mejores restaurantes,
            bares y cafeterias</p>
            </section>
        <Buscador />
    </section>
  )
}

export default Header