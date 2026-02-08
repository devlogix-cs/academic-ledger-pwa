export default function AuthLayout({ left, right }) {
  return (
    <div className="auth-shell">
      <section className="auth-left">
        {left}
      </section>

      <section className="auth-right">
        {right}
      </section>
    </div>
  );
}
