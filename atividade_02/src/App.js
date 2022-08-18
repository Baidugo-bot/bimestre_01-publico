import logo from './logo.svg';
import TipoIngresso from './Components/TipoIngresso';
import Evento from './Components/Evento';

import './App.css';

function App() {
  return (
    <div className="App">
      <Evento nome="GUSTAVO LIMA" data= "2 de Agosto de 2019(Sexta-Feira)" horario="18h30 - 00h00" local="Parque do Povo" cidade="Campina Grande PR" genero="Arte em forma de SERTANEJO"/>
      <h2 id='SubTitle'>Ingressos</h2>

    <ul>
      <li><TipoIngresso tipo="Camarote (open bar)" preco="150,00"/></li>
      <li><TipoIngresso tipo="Camarote" preco="100,00"/></li>
      <li><TipoIngresso tipo="Front-stage" preco="60,00"/></li>
      <li><TipoIngresso tipo="Pista" preco="30,00"/></li>
    </ul>
    </div>
  );
}

export default App;
