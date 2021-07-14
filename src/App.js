import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [ email, setEmail ] = useState('');
  const [ msg, setMsg] = useState('');

  function isValidEmail(){
      const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      return pattern.test(email);
  }

  function handleEmail(){
    if (isValidEmail()){
      let emailList = localStorage.getItem('emailList');
      emailList = JSON.parse(emailList);
      console.log(emailList);
      console.log(email);
      if (emailList.indexOf(email) === -1){
        emailList.push(email);
        localStorage.setItem('emailList', JSON.stringify(emailList));
        setMsg('Email cadastrado com sucesso.');
      } else {
        setMsg("Email já cadastrado");
        console.log(emailList);
      }
    } else {
      setMsg("Email inválido.");
    }
  }

  return (
    <div>
      <h1>Mega Promoção Chegando</h1>
      <p>
        Fique por dentro das novidades.
      </p>
      <input required="" type="email" className="emailInput" value={email} 
        placeholder="Cadastre o seu email" onChange={e => setEmail(e.target.value)}></input>
      <button type="button" onClick={handleEmail}>Cadastrar</button>
      <div>
        { msg }
      </div>
      
    </div>
  );
}

export default App;
