import React from 'react';
import "./SignUp.css"
// import './App.css'; // Importe o arquivo CSS aqui
import log from "./assets/log-in.svg"


const SignUp = () => {
  return (
    <div className="App">
        <div className="container-login">
          <div className="container">
            <div className="login">
              <section className="titulo">
                <img src={log} alt="icone de porta" />
                <h1>Faça seu Cadastro</h1>
              </section>

              <p className="info">Preencha suas informações de cadastro.</p>

              <form action="./index.html">
                <div className="inputs">
                  <label htmlFor="email">E-mail</label>
                  <section className="email">
                    <input type="email" id="email" name="email" className="input" placeholder="Digite seu e-mail" />
                  </section>
                </div>

                <div className="inputs">
                  <label htmlFor="senha" className="lbsenha">Senha</label>
                  <section className="senha">
                    <input type="password" name="password" className="input" placeholder="Digite sua senha" />
                  </section>
                </div>

                <div className="checkbox">
                  <div className="concordo">
                    <input type="checkbox" />
                    <p>Concordo com os Termos e Condições</p>
                  </div>
                </div>

                <div className="botao">
                  <button type="submit">entrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  );
}

export default SignUp;
