import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import "../css/main.css"

export default ({ children, pageMeta }) => (
  <>
    <Helmet>
      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Oliver B" />
      <title>{`ReactHelmetTest | ${pageMeta.title}`}</title>

      {/* The rest we set dynamically with props */}
      <meta name="description" content={pageMeta.description} />

      {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
      <meta name="keywords" content={pageMeta.keywords.join(",")} />

      <html lang="en" />
      <body
        className={pageMeta.customCssClass ? pageMeta.customCssClass : ""}
      />
    </Helmet>
    <div>
      <header>
        <h1>ReactHelmetTest</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars/">Our Cars</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer>{`${new Date().getFullYear()} No Rights Whatsoever Reserved`}</footer>
    </div>
  </>
)
