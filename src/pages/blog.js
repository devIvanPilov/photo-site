import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/BlogCards"

import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Blog" description="A page for blog posts" />

      <div className="container py-12 lg:pb-16">
    <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
      Blog{" "}
      
      <br />
      <span className="text-blue-600">
        My photo journey.
      </span>
    </h2>
  </div>

      <div className="bg-gray-100 py-12 lg:py-16">
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>
      <Newsletter />
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`