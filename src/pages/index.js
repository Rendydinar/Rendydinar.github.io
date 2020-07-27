import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
	  	<SEO title="Home" />
	    <h1>Hello</h1>
	    <h2>I'm Rendy dinar, living on beautiful island marapu village</h2>
	    <p>Need a developer ? <Link to="/blog">blog</Link></p>
    </Layout>
  )
}

export default IndexPage
  