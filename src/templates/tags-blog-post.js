import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

import blogStyles from '../pages/blog.module.scss'

const TagsBlogPost = ({ data, pageContext }) => {
	const { tag } = pageContext;
	const { totalCount } = data.allMarkdownRemark;
	const pageHeader = `${totalCount} tag "${tag}"`;

	return (
		<Layout>
		    <SEO title="Tags Blog Post" />
			<h2>{totalCount} tags "{tag}"</h2>
			<ol className={blogStyles.posts}>
				{data.allMarkdownRemark.edges.map((edge) => {
					return (
						<li className={blogStyles.post} key={edge.node.id}>
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
		</Layout>
	)
}

export const tagQuery = graphql`
	query($tag: String!) {
		allMarkdownRemark(
			sort: { fields: [frontmatter___postNumber], order: ASC }
			filter: { frontmatter: { tags: { in: [$tag]}}}
		){
			totalCount
			edges{
				node{
					id
					frontmatter{
						title
						date
						tags
					}
					fields {
						slug
					}
				}
			}
		}
	}
`


export default TagsBlogPost;