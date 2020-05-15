import React from 'react'
import {SEO} from '../components'
import {Button, Purchase} from '../styles/components'
import {Link} from 'gatsby'
const  CancelPage = () => {
  return (
    <div>
      <SEO title='Compra Cancelada'/>
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Recuerda que puedes volver cuando quieras </p>
        <p>!Te esperamos de vuelta ¡</p>
        <span role='img' aria-label='emoji'> 
          💔
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

export default CancelPage