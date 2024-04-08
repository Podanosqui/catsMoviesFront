import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


import Login from './pages/login/Login';

import Cadastro from './pages/login/Cadastro';
import RedefinirSenha from './pages/login/RedefinirSenha';
import EsqueciSenha from './pages/login/EsqueciSenha';
import Home from './pages/home/Home';
import MinhaConta from './pages/home/MinhaConta';
import CarrinhoDeCompras from './pages/carrinho/CarrinhoDeCompras';
import ListaDeDesejos from './pages/lista/ListaDeDesejos';
import HistoricoDeCompras from './pages/historico/HistoricoDeCompras';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/redefinirSenha" element={<RedefinirSenha />} />
        <Route path="/esqueciSenha" element={<EsqueciSenha />} />
        <Route path="/minhaConta" element={<MinhaConta />} />
        <Route path="/carrinhoDeCompras" element={<CarrinhoDeCompras />} />
        <Route path="/listaDeDesejos" element={<ListaDeDesejos />} />
        <Route path="/home" element={<Home />} />
        <Route path="/historicoDeCompras" element={<HistoricoDeCompras />} />
      </Routes>
    </Router>
  );
}



export default App;

