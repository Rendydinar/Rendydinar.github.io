import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

const TagsBlogPage = ({ pageContext }) => {
	const { tags, tagPostCounts } = pageContext;


	return (
		<Layout>
		    <SEO title="Tags Blog Page" />
			<h2>Tags Blog</h2>
			<ul>
				{tags.map((tag, i) => (
					<li key={i}>
						<Link to={`/blog/tag/${tag}`}>{tag} ({tagPostCounts[tag]})</Link>
					</li>
				))}
			</ul>
		</Layout>
	)
}

export default TagsBlogPage;