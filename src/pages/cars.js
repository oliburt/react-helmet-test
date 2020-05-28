import React from "react"
import Layout from "../components/layout"

const pageMeta = {
  title: "Cars",
  description: "test page for cars",
  keywords: ["test", "cars", "page", "react-helmet"],
  customCssClass: "slick",
}

export default () => (
  <Layout pageMeta={pageMeta}>
    <h2>Our Cars</h2>
    <div>A car</div>
    <div>Another car</div>
    <div>Yet another car</div>
    <div>Cars ad infinitum</div>
  </Layout>
)
