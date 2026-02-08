export default function Stat({ label, value }) {
  return (
    <div style={{
      padding: 12,
      border: "1px solid var(--border)",
      borderRadius: 12
    }}>
      <strong>{value}</strong>
      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}
