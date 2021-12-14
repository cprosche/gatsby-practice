import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home({ data }) {
  const { title, version } = data.site.siteMetadata
  return (
    <section>
      <Layout>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <h2>{title}</h2>
              <h3>Version {version}</h3>
              <p>Website Designer Extrordinare</p>
            </div>
            <div className="col-6">
              <img className="img-fluid" src="/lacroix.png" alt="la croix" />
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export const query = graphql`
  query MyQuery {
    site {
      siteMetadata {
        version
        description
        owner
        title
      }
    }
  }
`
