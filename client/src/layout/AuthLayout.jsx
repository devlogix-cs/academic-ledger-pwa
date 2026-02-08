export default function AuthLayout({ children }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1.618fr 1fr",
      minHeight: "100vh"
    }}>
      <section style={{ padding: 80 }}>
        <h1 style={{ fontSize: 48 }}>Academic Ledger</h1>
        <p style={{ color: "var(--text-muted)", maxWidth: 420 }}>
          Blockchain-verified student attendance and result platform.
        </p>
      </section>

      <section style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {children}
      </section>
    </div>
  );
}
