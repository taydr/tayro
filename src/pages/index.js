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
      <div>
      <ul>
      <li><a href="http://worrydream.com/MagicInk">interaction design</a> 
      </li>
      <li><a href="https://www.dougengelbart.org/content/view/138">intelligence augmentation</a></li>
      <li>san francisco + <a href="http://twitter.com/tayroga">twitter</a></li>
    </ul>

    <ul>
      <li><a href="http://synthesis.is">synthesis school</a></li>
      <li><a href="http://roamresearch.com">roam research</a></li>
      <li><a href="https://www.businessinsider.com/elon-musk-ad-astra-classdojo-conundrum-ethics-puzzles-2018-8">classdojo conundrums</a></li>
      <li><a href="https://www.classdojo.com/toolkit/">classdojo toolkit</a></li>
      <li><a href="https://hechingerreport.org/a-personalized-learning-program-with-ties-to-zuckerberg-shows-promise-despite-criticism/">summit learning plan</a></li>
      <li><a href="https://vimeo.com/57473663">facebook graph search</a></li>
      <li><a href="https://www.cca.edu/design/ixd/" style="text-decoration: line-through">cca ixd</a></li>
    </ul>
      </div>
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
