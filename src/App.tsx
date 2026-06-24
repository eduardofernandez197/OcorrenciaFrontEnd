import './App.css'
import { ResumoRelatorios, Saudacao } from './componentes/Components/Section';
import { TopBar } from './componentes/Components/TopBar';

type Relatorio = {
    id: number;
    titulo: string;
    cliente: string;
    tempo: string;
    status: string;
}

function App() {

    const relatorios: Relatorio[] = []

    return(
        <main>
            <TopBar title="Ocorrencias" showLogo/>

            <Saudacao/>
            
            <ResumoRelatorios/>

            <section aria-label="Criar novo relatório">
                <button type="button">
                <span>Novo Relatório</span>
                <small>Criar um novo relatório de inspeção</small>
                </button>
            </section>

            <section aria-labelledby="recentes-title">
                <h2 id="recentes-title">Recentes</h2>

                {relatorios.length === 0 ? (
                    <div>
                    <p>Nenhum relatório criado ainda.</p>
                    <button type="button">Novo Relatório</button>
                    </div>
                ) : (
                    relatorios.map((relatorio) => (
                    <article key={relatorio.id}>
                        <h3>{relatorio.titulo}</h3>
                        <p>{relatorio.cliente} · {relatorio.tempo}</p>
                        <span>{relatorio.status}</span>
                    </article>
                    ))
                )}
            </section>

            <nav aria-label="Navegação principal">
                <button type="button">Início</button>
                <button type="button">Relatórios</button>
                <button type="button">Novo</button>
                <button type="button">Perfil</button>
            </nav>
        </main>
    )
}

export default App
