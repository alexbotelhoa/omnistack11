import React, { useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  
  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    /*
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };
    */
    const data = {
      name: "Fulano Botelho", 
      email: "fulanobotelho@hotmail.com", 
      whatsapp: "04599999999", 
      city: "Curitiba",
      uf: "PR"
    };
    
    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/');
    } catch (err) {
      alert('Erro de cadastro, tente novamente!');
    }
  }
  
  return (
    <div className="register-container">
      <div className="content">
        <section className="">
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG" 
            value={name} 
            onChange={e => setName(e.target.value)} 
          />
          <input 
            type="email" 
            placeholder="E-mail" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
          <input 
            placeholder="Whatsapp" 
            value={whatsapp} 
            onChange={e => setWhatsapp(e.target.value)} 
          />
          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city} 
              onChange={e => setCity(e.target.value)} 
            />
            <input 
              placeholder="UF" 
              style={{ width: 80 }} 
              value={uf} 
              onChange={e => setUf(e.target.value)} 
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
