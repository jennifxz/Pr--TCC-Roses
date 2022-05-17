import "./Notes.scss";

export default function Notes() {
  return (
    <main class="page-notes">
      <header class="menu">
        <img
          style="width: 15em;"
          src="../../assets/images/logo-hori.jpg"
          alt=""
        />
        <a href="../archived Queries/index.html">Voltar</a>
      </header>

      <div class="info">
        <div class="branquin">
          <div class="text">
            <p>CAMILA NOVAES DOS SANTOS</p>
            <p>Data de nascimento: 20/03/2001</p>
          </div>
          <div class="text">
            <p>CPF:544.798.758-52</p>
            <p>Data: 27/03/2022</p>
          </div>
        </div>

        <div class="anotacoes">
          <h1 style="color: #2F5457; margin: 0px;">Anotações</h1>

          <textarea name="" id="" cols="30" rows="13"></textarea>
        </div>

        <div class="button">
          <a style="width: 4em;" href="">
            Concluir
          </a>
        </div>
      </div>

      <footer class="rodape">
        <img
          style="width: 15em;"
          src="../../assets/images/logo-hori.jpg"
          alt=""
        />
        <p style="width: 42em; text-align: center;">
          “Viva cada dia o seu mal e cada dia como se fosse o último, aproveite
          cada sorriso, cada momento pois eles passam e só nos resta
          lembranças.”
        </p>
      </footer>
    </main>
  );
}
