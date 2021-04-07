import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Entrar</h3>

      <div className="Entradas">
        <input placeholder="Digite seu email" id="email"></input>
        <input placeholder="Digite sua senha" id="email"></input>
      </div>

      <br/>
      <button type="submit">Entrar</button>
      <a className="Link">Esqueci minha senha</a>

      <div className="caixa-redes-sociais">
        <button type="submit" className="Redes-sociais"><i class="fab fa-google"></i> Entrar com o Google</button>
        <button type="submit" className="Redes-sociais"><i class="fab fa-facebook"></i> Entrar com o Facebook</button>
      </div>
    </div>

  );
}

export default App;
