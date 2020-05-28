import React from "react"
import Layout from "../components/layout"

const pageMeta = {
  title: "Home",
  description: "a nice description",
  keywords: ["test", "react", "helmet"],
}

export default () => (
  <Layout pageMeta={pageMeta}>
    <div>Home</div>
  </Layout>
)
