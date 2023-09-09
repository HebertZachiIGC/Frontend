import React from 'react';
import login from '../assets/log-in.svg';
import './Login.css'

function LoginPage() {
  return (
    <div className="container-login">
      <div className="container">
        <div className="login">
          <section className="titulo">
            <img src={login} alt="icone de porta" />
            <h1>Faça seu Login</h1>
          </section>
          <p className="info">Entre com suas informações de cadastro.</p>
          <form action="">
            <label htmlFor="email">E-mail</label>
            <section className="email">
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Digite seu e-mail"
                pattern="+@+"
                title="nome@seudominio.com"
                required
              />
            </section>
            <label htmlFor="senha" className="lbsenha">
              Senha
            </label>
            <section className="senha">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Digite sua senha"
                required
              />
            </section>
            <div className="checkbox">
              <div className="lembre-me">
                <input type="checkbox" />
                <p>Lembre-me</p>
              </div>
              <div className="esqueci">
                {/* <a href="http://https://www.google.com/" target="_blank" rel=""> */}
                  <p>Esqueci minha Senha</p>
                {/* </a> */}
              </div>
            </div>
            <div className="botao">
              <button type="submit">entrar</button>
            </div>
            <div className="registre">
              {/* <a href="./cadastro.html" target="_blank"> */}
                <p>
                  Não tem uma conta? <strong>Registre-se</strong>
                </p>
              {/* </a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="imagem"></div>
  );
}

export default LoginPage;
