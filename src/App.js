import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [ email, setEmail ] = useState('');
  const [ error, setError ] = useState(false);
  const [ msg, setMsg]      = useState('');

  function isValidEmail(){
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      return pattern.test(email);
  }

  function handleEmail(){
    if (isValidEmail()){
      let emailList = localStorage.getItem('emailList');
      emailList = JSON.parse(emailList);
      if (emailList === null) {
        emailList = []
      }
      if (emailList.indexOf(email) === -1){
        emailList.push(email);
        localStorage.setItem('emailList', JSON.stringify(emailList));
        setMsg('E-mail cadastrado com sucesso.');
        setError(false);
      } else {
        setMsg("Este e-mail já foi cadastrado.");
        setError(true);
      }
    } else {
      setMsg("E-mail inválido.");
      setError(true);
    }
  }

  function clearEmail () {
    //localStorage.clear();
    setEmail("");
    setMsg("");
  }

  return (
    <>
      <header className="header">
        <h1>MEGA Promoção</h1>
      </header>
      <section className="section">
        <div className="card">
          <img src="fone.png" alt="Mega Promoção" />
          <span className="description">Desconto: 20%</span>
        </div>
        <div className="card">
          <img src="nikon.png" alt="Mega Promoção" />
          <span className="description">Desconto: 15%</span>
        </div>
        <div className="card">
          <img src="relogio-pulso.png" alt="Mega Promoção" />
          <span className="description">Desconto: 18%</span>
        </div>
      </section>
      <footer className="footer">
        <p>
          Fique por dentro das novidades.
        </p>
        <div>
          <input required="" type="email" className="emailInput" value={email} 
            placeholder="Cadastre o seu e-mail" onChange={e => setEmail(e.target.value)}></input>
          <button type="button" onClick={handleEmail}>Cadastrar</button>
          <button type="button" onClick={clearEmail}>Limpar</button>
          { error ?
            <span className="errorSpan">{msg}</span>:
            <span className="successSpan">{msg}</span>
          }
        </div>
      </footer>
    </>
  );
}

export default App;
