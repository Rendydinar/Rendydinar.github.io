/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import Footer from './footer'
import Header from './header'

import '../styles/index.scss'

import layoutStyles from './layout.module.scss'

const Layout = ({ children }) => {

  return (
  	<ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={layoutStyles.container}>
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>

          <div className={layoutStyles.content}>
            <Header />
            {children}
          </div>
          <Footer/>
        </div>
      )}
    </ThemeToggler>
  )
}


export default Layout
