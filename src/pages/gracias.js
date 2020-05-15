import React from 'react'
import {SEO} from '../components'
import {Button, Purchase} from '../styles/components'
import {Link} from 'gatsby'
const  GraciasPage = () => {
  return (
    <div>
      <SEO title='Compra exitosas'/>
      <Purchase>
        <h2>Compra exitosa</h2>
        <p>Espero que disfutes tu swg disfrutalo con orgullo </p>
        <p>!Te esperamos de vuelta ¡</p>
        <span role="img" aria-labelledby='emojis'> 
          ❤️
        </span>
        <Link to='/'>
          <Button>
            Volver al catalogo
          </Button>
        </Link>
      </Purchase>
    </div>
  )
}

export default GraciasPage