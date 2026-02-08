import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignupPage({ setPage }) {
  const [role, setRole] = useState("student");

  return (
    <div className="card wide">
      <h2>Create Account</h2>

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

      <Input label="Full Name" />
      <Input label="Initial" />
      <Input label="Email" />
      <Input label="Phone Number" />

      {role === "student" && (
        <>
          <Input label="Age" />
          <Input label="Date of Birth" type="date" />
          <Input label="Student ID" />
        </>
      )}

      {role === "staff" && (
        <>
          <Input label="Designation" />
          <Input label="Department" />
          <Input label="Staff ID" />
        </>
      )}

      <Input label="Password" type="password" />
      <small className="hint">
        Password must be 8+ chars, uppercase, lowercase, number & symbol.
      </small>

      <Input label="Confirm Password" type="password" />

      <Button>Create Account</Button>

      <span className="link" onClick={() => setPage("login")}>
        Already have an account? Login
      </span>
    </div>
  );
}
