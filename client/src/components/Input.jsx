export default function Input(props) {
  return (
    <input {...props} style={{
      width: "100%",
      padding: 12,
      marginBottom: 14,
      borderRadius: 10,
      background: "var(--panel)",
      border: "1px solid var(--border)",
      color: "white"
    }} />
  );
}
