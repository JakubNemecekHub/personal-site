import * as React from 'react'
import Layout from '../components/layout'
import { myList } from './pages.module.css'

const AboutPage = () => {
  return (
    <Layout pageTitle="My ties">
      <p>I recently recieved a splendid book on ties from incomparable the Stephan Fry. This awakened in me a newly found interest. I'm afraid my girlfriend will soon think me unbereable.</p>
      <p>Here I would like to present my ties and the complay ways of tiying a tie knot.</p>
      
      <h2>I can use</h2>
      <ul className={myList}>
        <li><p>An interactive and dynamic (i hope these are the proper words) list of knots I know. Click one and a diagram will be shown.</p></li>
        <li><p>A gallery of my own ties.</p></li>
      </ul>

    </Layout>
  )
}

export default AboutPage