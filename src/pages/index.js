import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <p>
          <strong>Taylor Rogalski</strong>
        </p>
        <p>
          I'm a designer based in San Francisco. I'm interested in how computers
          can help you think better thoughts and live life more fully.
        </p>
        <p>
          I attended <a href="http://cca.edu">CCA</a> to study{" "}
          <a href="">interaction design</a>, but dropped out in 2013 to work on{" "}
          <a href="">Graph Search</a> at{" "}
          <a href="http://facebook.com">Facebook</a>. I also designed early
          versions of the Summit Learning Plan, which helps students relate
          their long-term goals to their daily actions.
        </p>
        <p>
          I also led design at <a href="http://classdojo.com">ClassDojo</a>.
        </p>
        <p>
          Now, I help people out with their projects, and occasionally angel
          invest. I've worked with Primer, /talk, Slapdash, Roam Research, and
          others.
        </p>
        <p>
          <a href="mailto:tay@tay.ro">Email me</a> if you'd like to work
          together!
        </p>
        {/* <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })} */}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
