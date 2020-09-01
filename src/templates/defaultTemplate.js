import React from "react"
import { graphql } from "gatsby"

function defaultTemplate({ data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  /**
   * Hierin kan je nu je template gaan maken. De .blog-post-content is de rauw gegenereerde HTML vanuit de markdown copiler. Die kan je via (S)CSS dan stylen etc.
   */
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`

export default defaultTemplate;