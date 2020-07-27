const path = require('path');
const _ = require('lodash');
const { slugify } = require('./src/utils/Utility');

// Create Node
module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;

	if(node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md')

		createNodeField({
			node,
			name: 'slug',
			value: slug
		})
	}
}

// Create Pages
module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const templates = {
		blogList: path.resolve('./src/templates/blog-list.js'),
		blogPost: path.resolve('./src/templates/blog-single.js'),
		tagsPages: path.resolve('./src/templates/tags-blog-post-page.js'),
		tagsBlogPost: path.resolve('./src/templates/tags-blog-post.js'),
	}

	const res = await graphql(`
		query {
		  allMarkdownRemark {
		    edges {
		      node {
	            frontmatter {
	              tags
	            }
		        fields {
		          slug
		        }
		      }
		    }
		  }
		}
	`);

  // Extracting all posts from res
  const posts = res.data.allMarkdownRemark.edges;

	posts.forEach(edge => {
		createPage({
			component: templates.blogPost,
			path: `/blog/${edge.node.fields.slug}`,
			context: {
				slug: edge.node.fields.slug
			}
		});
	});

  // kita ambil seluruh tags dari post pada setiap file markdown/postingan yang ada. 
  let tags = [];
 	_.each(posts, edge => {
	  	if(_.get(edge, 'node.frontmatter.tags')) {
	    	tags = tags.concat(edge.node.frontmatter.tags);
	  	}
	})

 	// Kode dibawah ini akan membuat format seperti ini :
 	// ['design', 'code']
  // {design: 1, code:1, web: 0}
  let tagPostCounts = {}

  tags.forEach(tag => {
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1; 
  });

  tags = _.uniq(tags);


  // kita buat halaman/page tags
  createPage({
    path: '/blog/tags',
    component: templates.tagsPages,
    context: {
      tags, 
      tagPostCounts
    }
  });  

	// kita buat halaman yang akan menampilkan daftar posting berdasarkan tag
	tags.forEach(tag => {
		createPage({
		  path: `/blog/tag/${slugify(tag)}`,
		  component: templates.tagsBlogPost,
		  context: {
		    tag
		  },
		});
	});

  // kita setting 6 post dalam 1 kali render page
  // Create posts pagination pages
  const postsPerPage = 6
  const numberOfPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1

    // Skip first page because of index.js
    if (isFirstPage) return

    // kita buat halaman untuk menghandle pagenation
    createPage({
      path: `/blog/page/${currentPage}`,
      component: templates.blogList,
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numberOfPages: numberOfPages,
        currentPage: currentPage,
      },
    })
  })


}