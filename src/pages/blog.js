import React from "react";
import { Link, graphql, StaticQuery } from "gatsby"

import Layout from '../components/layout'
import PaginationLinks from '../components/PaginationBlog'
import SEO from "../components/seo"

import blogStyles from './blog.module.scss'

const BlogPage = () => {	
  const postsPerPage = 6; // jumlah post per page yang akan ditampilkan
  let numberOfPages;


	return (
		<Layout>
		    <SEO title="Blog" />
			<h1>Blog</h1>
			<Link to='/blog/tags'>
				Tags
			</Link>
			<StaticQuery query={blogQuery} render={data => {
      			numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)

		        return (
		        	<div>
						<ol className={blogStyles.posts}>
							{data.allMarkdownRemark.edges.map((edge, i) => {
								return (
									<li key={i} className={blogStyles.post}>
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
					  	<PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
		        	</div>
		        )

			}} />
		</Layout>
	);
}

const blogQuery = graphql`
	query blogQuery{
	  allMarkdownRemark (
			sort: { fields: [frontmatter___postNumber], order:ASC }
			limit: 6
	  ) {
	  	totalCount
	    edges {
	      node {
	        frontmatter {
	          title
	          date
	          tags
	        }
	        html
	        fields {
	          slug
	        }
	      }
	    }
	  }
	}
`;


export default BlogPage

