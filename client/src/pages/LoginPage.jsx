import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Stat from "../components/Stat";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "student") navigate("/student");
    else navigate("/staff");
  };

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

          <Button onClick={handleLogin}>Login</Button>

          <p className="auth-links">
            <span onClick={() => navigate("/forgot")}>Forgot password?</span>
            {" • "}
            <span onClick={() => navigate("/register")}>Create account</span>
          </p>
        </div>
      }
    />
  );
}
