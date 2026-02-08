import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ForgotPassword() {
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="auth-card">
      <h2>Reset Password</h2>

      {!otpSent ? (
        <>
          <Input placeholder="Registered Email" />
          <Input placeholder="Registered Phone Number" />
          <Button onClick={() => setOtpSent(true)}>Generate OTP</Button>
        </>
      ) : (
        <>
          <Input placeholder="Enter OTP" />
          <Input type="password" placeholder="New Password" />
          <Button
            onClick={() => {
              alert("✅ Password updated successfully!");
              navigate("/");
            }}
          >
            Update Password
          </Button>
        </>
      )}
    </div>
  );
}
