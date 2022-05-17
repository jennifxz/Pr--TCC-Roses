import "./Mark.scss";
import { Link } from "react-router-dom";

export default function Mark() {
  return (
    <main class="page-mark">
      <div class="info">
        <Link to="/marcadas">Voltar</Link>
        <h1 style="color: #40C0CB; font-size: 2.3em; font-family: rose-bold;">
          MARCAR CONSULTA
        </h1>

        <div class="registro">
          <div class="paciente">
            <label for="">Nome do paciente</label>
            <input
              style="width: 100%;"
              type="text"
              placeholder="Ex: Urias Conceição da Silva"
            />
          </div>
          <div class="formulario-1">
            <div class="paciente">
              <label for="">Data de nascimento</label>
              <input type="date" />
            </div>
            <div class="paciente">
              <label for="">CPF do paciente</label>
              <input type="text" />
            </div>
          </div>
          <div class="formulario-2">
            <div class="paciente">
              <label for="">Horário</label>
              <input type="time" />
            </div>
            <div class="paciente">
              <label for="">Data de consulta</label>
              <input type="date" />
            </div>
          </div>
          <div class="formulario-3">
            <div class="paciente">
              <label for="">Preço</label>
              <input type="number" />
            </div>
            <div class="paciente">
              <label for="">Contato</label>
              <input type="text" />
            </div>
          </div>
        </div>

        <Link to="/marcadas">Marcar</Link>
      </div>
    </main>
  );
}
