/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import {Content, Footer} from '../styles/components'
import Header from "./header"
import './layout.css'

const Layout = ({ children }) => (
      <>
        <Header  />
        <Content>
          <main>{children}</main>
          <Footer>
            con amor por mi
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Content>
  </>
  )


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
