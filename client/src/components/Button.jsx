export default function Button({ children }) {
  return (
    <button style={{
      width: "100%",
      padding: 12,
      borderRadius: 10,
      border: "none",
      background: "linear-gradient(135deg,#38bdf8,#0ea5e9)",
      fontWeight: 600
    }}>
      {children}
    </button>
  );
}
