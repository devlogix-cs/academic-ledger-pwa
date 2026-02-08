import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Stat from "../components/Stat";
import { useState } from "react";

export default function LoginPage({ setPage }) {
  const [role, setRole] = useState("student");

  return (
    <AuthLayout
      left={
        <>
          <h1>
            Academic <span className="accent">Ledger</span>
          </h1>
          <p className="subtitle">
            Blockchain-verified academic identity & records.
          </p>

          <div className="stats-row">
            <Stat value="99%" label="Accuracy" />
            <Stat value="500+" label="Records" />
            <Stat value="0%" label="Tampering" />
          </div>
        </>
      }
      right={
        <div className="auth-card">
          <h2>Login</h2>
          <p className="muted">Select role & continue securely</p>

          <div className="role-switch">
            <button
              className={role === "student" ? "active" : ""}
              onClick={() => setRole("student")}
            >
              Student
            </button>
            <button
              className={role === "staff" ? "active" : ""}
              onClick={() => setRole("staff")}
            >
              Staff
            </button>
          </div>

          <Input placeholder="Email / Username" />
          <Input type="password" placeholder="Password" />

          <Button>Login</Button>

          <p className="auth-links">
            <span onClick={() => setPage("forgot")}>Forgot password?</span>
            {" • "}
            <span onClick={() => setPage("register")}>Create account</span>
          </p>
        </div>
      }
    />
  );
}
