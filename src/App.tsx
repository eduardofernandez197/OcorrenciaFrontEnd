import './App.css'
import { Home } from './pages/Home';
import { DadosGerais } from './pages/DadosGerais';
import { Observacoes } from './pages/Observacoes';
import { ObservacoesForm } from './pages/ObservacoesForm';
import { PreVisualizacao } from './pages/PreVisualizacao';
import { BrowserRouter, Routes, Route } from 'react-router';


function App() {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/DadosGerais" element={<DadosGerais />}/>
            <Route path="/Observacoes" element={<Observacoes />}/>
            <Route path="/ObservacoesForm" element={<ObservacoesForm />}/>
            <Route path="/PreVisualizacao" element={<PreVisualizacao />}/>
          </Routes>
        </BrowserRouter> 
    )
}

export default App
