import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

import HeaderGeneric from '../components/HeaderGeneric'
import Layout from '../components/layout'

// react template for all blog posts that will be read in from md files
class BlogPost extends React.Component {
    render() {
        // retrieve markdown content
        const blog_markdown = this.props.data.markdownRemark;

        return (
            <Layout>
                <Helmet title={blog_markdown.frontmatter.title} />
                <HeaderGeneric headerText={blog_markdown.frontmatter.title}
                paragraphText={blog_markdown.frontmatter.date}/>
                <div id="main">
                    <section id="content" className="main">
                        <div dangerouslySetInnerHTML={{ __html: blog_markdown.html }}/>
                        <Link to="/Blog" className="button">Return to blog</Link>
                </section>
                </div>
            </Layout>
        )
    }
}

export default BlogPost

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
            path
            title
            date
            }
        }
    }
`
