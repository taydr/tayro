import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/biobutton"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const buttonClass = {
      margin: 6,
      backgroundColor: "transparent",
      WebkitBoxShadow: "0px 1px black",
    }
    return (
      <Layout
        style={{ position: "relative" }}
        location={this.props.location}
        title={siteTitle}
      >
        <h1
          style={{
            fontWeight: 900,
            fontSize: "8em",
            WebkitTextStrokeColor: "black",
            WebkitTextStrokeWidth: "1px",
            color: "white",
            // position: "absolute",
            // top: 0,
            // left: 0,
          }}
        >
          Taylor Rogalski
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Button url="https://en.wikipedia.org/wiki/Interaction_design">
            product design
          </Button>
          <Button url="https://en.wikipedia.org/wiki/Intelligence_amplification">
            tools for thought
          </Button>
          <Button url="https://en.wikipedia.org/wiki/San_Francisco">
            san francisco
          </Button>
          <Button url="https://roamresearch.com">roam research</Button>
          {/* <Button>google maps for your life</Button>
          <Button>game tape for knowledge work</Button>
          <Button>be your own sludgelord</Button> */}
          <Button url="https://www.businessinsider.com/elon-musk-ad-astra-classdojo-conundrum-ethics-puzzles-2018-8">
            classdojo conundrums
          </Button>
          <Button url="https://twitter.com/search?q=%23omgtoolkit">
            classdojo toolkit
          </Button>
          <Button url="https://www.summitlearning.org/">
            summit learning plan
          </Button>
          <Button url="https://vimeo.com/57473663">
            facebook graph search
          </Button>
          <Button url="https://www.cca.edu/design/ixd/">
            cca ixd (dropout)
          </Button>
        </div>

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
