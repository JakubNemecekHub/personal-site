import * as React from 'react'
import Layout from '../components/layout'
import { myList } from './pages.module.css'

const AboutPage = () => {
  return (
    <Layout>
      <p>The books are multiplying and one simply cannot keep up. A system to keep track of the unread, the finished and the not yet bought is sorely missing.</p>
      <p>An underlying database (either mongoDB, or my preferred SQL) with a simple data model. And on top of that a nice and tidy front-end with basic functionality of adding, editing and removing books.</p>
      <p>Might also use this space for a focus section on:</p>
      <ul className={myList}>
        <li><p>Charles Dickens</p></li>
        <li><p>P. G. Wodehouse</p></li>
        <li><p>H. G. Wells</p></li>
        <li><p>H. P. Lovecraft & C. A. Smith</p></li>
      </ul>

    </Layout>
  )
}

export default AboutPage