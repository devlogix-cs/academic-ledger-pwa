import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
  const [page, setPage] = useState("login"); 
  // login | register | forgot

  return (
    <>
      {page === "login" && <LoginPage setPage={setPage} />}
      {page === "register" && <RegisterPage setPage={setPage} />}
      {page === "forgot" && <ForgotPassword setPage={setPage} />}
    </>
  );
}
