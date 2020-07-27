import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

import profileImage from '../images/profile-dicoding.jpg'

const AboutPage = () => {
	return (
		<Layout>
		    <SEO title="About" />
			<h1>About me</h1>
			<p>I currently student of University Kristen Wira Wacara Sumba.</p>
			<img src={profileImage} width="320" heigth="200" />
			<p>You can see what am doing in <a href="https://github.com/Rendydinar" target="_blank">here!</a></p>
			<p><Link to="/contact">Want to work with me? Reach out.</Link></p>
		</Layout>
	)
}

export default  AboutPage