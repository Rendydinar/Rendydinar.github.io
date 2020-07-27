import React from 'react'
import { graphql, Link } from 'gatsby'
import PaginationLinks from '../components/PaginationBlog'
import Layout from '../components/layout'
import SEO from "../components/seo"

import blogStyles from '../pages/blog.module.scss'

export const blogListQuery = graphql`
	query blogListQuery ($skip: Int!, $limit: Int!){
		allMarkdownRemark( 
			sort: { fields: [frontmatter___postNumber], order: ASC}
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					frontmatter {
						title
						date
						tags
					}
					fields {
						slug
					}
					html
				}
			}
		}
	}
`;

const BlogList = (props) => {
	const posts = props.data.allMarkdownRemark.edges
	const { currentPage, numberOfPages } = props.pageContext
	return (
		<Layout>
		    <SEO title="Blog List" />
			<h1>Blog</h1>
			<small className={blogStyles.pageInfo}>page {numberOfPages}</small> <br/>
			<Link to='/blog/tags'>
				Tags
			</Link>
			<ol className={blogStyles.posts}>
				{posts.map(edge => {
					return (
						<li key={edge.node.id} className={blogStyles.post}>
							<Link className={blogStyles.body} to={`/blog/${edge.node.fields.slug}`}>
								<h2>{edge.node.frontmatter.title}</h2>						
									<div className={blogStyles.content}>
									<p>{edge.node.frontmatter.date}</p>
									<div className={blogStyles.tags}>
										{edge.node.frontmatter.tags.map((tag, i) => (
											<span key={i}>
												<Link to={`/blog/tag/${tag}`}>#{tag}</Link>
											</span>
										))}
									</div>
								</div>
							</Link>
						</li>
					)
				})}
			</ol>
		  <PaginationLinks currentPage={currentPage} numberOfPages={numberOfPages} />
		</Layout>
	)
}; 

export default BlogList