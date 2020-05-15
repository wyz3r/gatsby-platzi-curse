
import React from 'react'
import {Link} from 'gatsby'
import formatPrices from '../utils/priceFormat'
import {StyledProducts} from '../styles/components'

export default function Products({products}) {
  console.log(products)
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({node})=>{
          const price =  formatPrices(node.price)
          return (
            <article key={node.id}>
              <img  alt={node.product.metadata.name} src={node.product.metadata.img} />
              <p>{node.product.metadata.name}</p>
              <small>USD {price}</small>
              <Link to={`/${node.id}`}>
                Comprar ahora <span>➡</span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}
