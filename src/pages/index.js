import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Check dan Hidde:</h1>
    <Link to="/post/hello-world">Dit is een markdown post..."</Link>
    <Link to="/post/another-one">Dit is een andere"</Link>
  </Layout>
)

export default IndexPage
