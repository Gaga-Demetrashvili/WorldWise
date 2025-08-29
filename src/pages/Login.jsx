/** @format */

import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav"; // Adjust the path as needed
import Button from "../components/Button";
import { useAuth } from "../contexts/FakeAuthContext"; // Adjust the path as needed

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth(); // Assuming you have a login function in your auth context
  const navigate = useNavigate(); // Assuming you are using react-router-dom for navigation

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password); // Call the login function with email and password
  }

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true }); // Redirect to the app page if authenticated
    },
    [isAuthenticated, navigate]
  ); // Assuming you have an isAuthenticated state in your auth context

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
