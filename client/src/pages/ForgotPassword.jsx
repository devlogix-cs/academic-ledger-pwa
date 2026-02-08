import AuthLayout from "../layout/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ForgotPassword({ setPage }) {
  return (
    <AuthLayout
      left={
        <>
          <h1>Reset Password</h1>
          <p className="subtitle">
            Verify your identity to change password.
          </p>
        </>
      }
      right={
        <div className="auth-card">
          <Input placeholder="Registered Email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="OTP" />
          <Input
            type="password"
            placeholder="New Password"
          />

          <Button>Update Password</Button>

          <p className="auth-links">
            <span onClick={() => setPage("login")}>Back to login</span>
          </p>
        </div>
      }
    />
  );
}
