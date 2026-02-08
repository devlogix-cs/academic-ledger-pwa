import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    alert("✅ Account created successfully!");
    navigate("/");
  };

  return (
    <div className="auth-card">
      <h2>Create Account</h2>

      <Input placeholder="Full Name" />
      <Input placeholder="Initial" />
      <Input placeholder="Age" />
      <Input type="date" />
      <Input placeholder="Email" />
      <Input placeholder="Phone Number" />
      <Input placeholder="ID Card Number" />
      <Input
        type="password"
        placeholder="Password (min 8 chars, 1 number)"
      />

      <Button onClick={handleRegister}>Create Account</Button>

      <p className="auth-links">
        <span onClick={() => navigate("/")}>Back to login</span>
      </p>
    </div>
  );
}
