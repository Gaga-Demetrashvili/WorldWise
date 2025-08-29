/** @format */

import styles from "./Sidebar.module.css";
import Logo from "./Logo"; // Adjust the path based on the actual location of the Logo component
import AppNav from "./AppNav"; // Adjust the path based on the actual location of the AppNav component
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;
