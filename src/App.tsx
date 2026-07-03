import './App.css'
import { Home } from './pages/Home';
import { DadosGerais } from './pages/DadosGerais';
import { Observacoes } from './pages/Observacoes';
import { ObservacoesForm } from './pages/ObservacoesForm';

function App() {
    return(
        //<main className="app">
            //<Home />
        //</main>
        //<main className='app'>
            //<DadosGerais />
        //</main>
        //<main className='app'>
            //<Observacoes />
        //</main>
        <main className='app'>
            <ObservacoesForm/>
        </main>
    )
}

export default App
