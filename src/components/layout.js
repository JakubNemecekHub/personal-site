import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  bodyContainer,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  mainBody,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // Must return one element
    <div className={container}>
      { /* The main title */ }
      <header className={siteTitle}>
        <h6>the personal site of</h6>
        <h1>Jakub Němeček</h1>
      </header>

      { /* Flex container */ }
      <div className={bodyContainer}>
        { /* Navigation bar */ }
        <nav>
          <ul className={navLinks}>

            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/skills" className={navLinkText}>
                Skills
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText}>
                Projects
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/books" className={navLinkText}>
                Books
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/ties" className={navLinkText}>
                Ties
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/photos" className={navLinkText}>
                Photo
              </Link>
            </li>

          </ul>
        </nav>
        { /* The Main body part - should contain pages */ }
        <div className={mainBody}>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </div>
      </div> { /* End of flex container */ }

    </div> /* End of the one element */
  )
}

export default Layout