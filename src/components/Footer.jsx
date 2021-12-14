import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as styles from "../styles/footer.module.css"

export default function Footer() {
  const { version } = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          version
          description
          owner
          title
        }
      }
    }
  `).site.siteMetadata

  return (
    <footer className={styles.footer}>
      <p>&copy; 2021 Gastby Practice Site</p>
      <p>Version {version}</p>
    </footer>
  )
}
