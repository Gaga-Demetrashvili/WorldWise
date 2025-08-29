/** @format */

import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo"; // Adjust the path based on the actual location of the Logo component

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />

      <ul>
        <li>
          {/* The difference between Link and NavLink is that NavLink has special .active
          class when it's selected and we should only use NavLink if we want ot give 
          styles to active link. Otherwise we should use Link component!!! */}
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
