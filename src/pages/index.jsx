import React from "react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <section>
      <Layout>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <h2>Design</h2>
              <h3>Develop & Deploy</h3>
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
