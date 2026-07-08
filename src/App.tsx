import './App.css'
import { Home } from './pages/Home';
import { DadosGerais } from './pages/DadosGerais';
import { Observacoes } from './pages/Observacoes';
import { ObservacoesForm } from './pages/ObservacoesForm';
import { PreVisualizacao } from './pages/PreVisualizacao';
import { BrowserRouter, Routes, Route } from 'react-router';
import { useState } from 'react';

// Observacao ja salva: tem id para identificar/renderizar depois.
type Observacao = {
  id: number;
  titulo: string;
  descricao: string;
  foto: File;
};

// NovaObservacao vem do formulario: ainda nao tem id.
type NovaObservacao = {
  titulo: string;
  descricao: string;
  foto: File;
};

function App() {

    // Lista temporaria de observacoes enquanto ainda nao temos backend.
    const [observacoes, setObservacoes] = useState<Observacao[]>([]);
    
    // Funcao que o formulario chama para entregar uma nova observacao ao App.
    const adicionarObservacao = (novaObservacao:NovaObservacao) => {
      const observacaoComId = {
        id: Date.now(),
        ...novaObservacao,
      };

      // observacoesAtuais e preenchido pelo React com o valor atual do estado.
      setObservacoes((observacoesAtuais) => [
        ...observacoesAtuais,
        observacaoComId,
      ])

      console.log(observacoes)
    }

    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/DadosGerais" element={<DadosGerais />}/>
            <Route path="/Observacoes" element={<Observacoes observacoes={observacoes}/>}/>
            {/* Passa a funcao do App para o formulario salvar a observacao aqui. */}
            <Route path="/ObservacoesForm" element={<ObservacoesForm aoSalvar={adicionarObservacao}/>}/>
            <Route path="/PreVisualizacao" element={<PreVisualizacao />}/>
          </Routes>
        </BrowserRouter> 
    )
}

export default App
