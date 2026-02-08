import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

export default function RegisterPage({ setPage }) {
  return (
    <AuthLayout
      left={
        <>
          <h1>Create Account</h1>
          <p className="subtitle">
            Secure academic identity for students.
          </p>
        </>
      }
      right={
        <div className="auth-card">
          <Input placeholder="Full Name" />
          <Input placeholder="Initial" />
          <Input placeholder="Age" />
          <Input type="date" placeholder="Date of Birth" />
          <Input placeholder="Email ID" />
          <Input placeholder="Phone Number" />
          <Input type="file" />
          <Input
            type="password"
            placeholder="Password (min 8 chars, 1 number)"
          />

          <Button>Create Account</Button>

          <p className="auth-links">
            <span onClick={() => setPage("login")}>
              Already have an account? Login
            </span>
          </p>
        </div>
      }
    />
  );
}
