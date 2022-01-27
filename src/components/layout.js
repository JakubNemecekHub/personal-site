import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  bodyContainer,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  mainBody,
  active,
} from './layout.module.css'

const Layout = ({ children }) => {

  return (
    // Must return one element
    <div className={container}>
      <title>JN</title> { /* I do not know how to put it into the header */ }
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
              <Link to="/" className={navLinkText} activeClassName={active}>
                Home
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/skills" className={navLinkText} activeClassName={active}>
                Skills
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/projects" className={navLinkText} activeClassName={active}>
                Projects
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/books" className={navLinkText} activeClassName={active}>
                Books
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/ties" className={navLinkText} activeClassName={active}>
                Ties
              </Link>
            </li>

            <li className={navLinkItem}>
              <Link to="/photos" className={navLinkText} activeClassName={active}>
                Photo
              </Link>
            </li>

          </ul>
        </nav>
        { /* The Main body part - should contain pages */ }
        <div className={mainBody}>
          {children}
        </div>
      </div> { /* End of flex container */ }

    </div> /* End of the one element */
  )
}

export default Layout