import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="page-login">
      <Link to="/" class="button-return">
        <p>Página Inicial</p>
      </Link>
      <img src="/images/unknown.png" class="logo-login" />
      <div class="login-psicologo">
        <label for="email">
          <b>E-mail:</b>
        </label>
        <input
          type="text"
          placeholder="email-psi@hotmail.com"
          name="email"
          required
        />
        <label for="psw">
          <b>Palavra-passe</b>
        </label>
        <input type="password" placeholder="Senha" name="senha" required />
        <Link to="/arquivadas" class="button-submit">
          Entrar
        </Link>
      </div>
    </main>
  );
}
