import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import * as styles from "../styles/layout.module.css"
import Footer from "./Footer"
import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
