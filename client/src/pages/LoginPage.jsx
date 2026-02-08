import Input from "../components/Input";
import Button from "../components/Button";
import Stat from "../components/Stat";

export default function LoginPage() {
  return (
    <div style={{
      width: 360,
      padding: 32,
      borderRadius: 16,
      background: "var(--panel)",
      border: "1px solid var(--border)"
    }}>
      <h2>Sign in</h2>

      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />

      <Button>Login</Button>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Stat label="Accuracy" value="99%" />
        <Stat label="Records" value="500+" />
        <Stat label="Tamper" value="0%" />
      </div>
    </div>
  );
}
