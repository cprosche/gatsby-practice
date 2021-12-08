import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Cade Rosche</h1>
      <div className={styles.navlinks}>
        <Link to="/" className={styles.navlinkanchors}>
          Home
        </Link>
        <Link to="/about" className={styles.navlinkanchors}>
          About
        </Link>
        <Link to="/projects" className={styles.navlinkanchors}>
          Projects
        </Link>
      </div>
    </nav>
  )
}
