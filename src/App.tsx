import './App.css'
import { BottomNav } from './componentes/Components/BottomNav';
import { NovosRelatorios, RelatoriosRecentes, ResumoRelatorios, Saudacao } from './componentes/Components/Section';
import { TopBar } from './componentes/Components/TopBar';

type Relatorio = {
    id: number;
    titulo: string;
    cliente: string;
    tempo: string;
    status: string;
}

function App() {

    const relatorios: Relatorio[] = [
        {
            id: 1,
            titulo: "RT-2024-042 - Inspeção Elétrica Bloco A",
            cliente: "Construtora Ômega Ltda.",
            tempo: "agora mesmo",
            status: "Rascunho"
        },
        {
            id: 2,
            titulo: "RT-2024-039 - Vistoria Predial Torre Norte",
            cliente: "Edifício Solar Residence",
            tempo: "2d atrás",
            status: "Finalizado"
        },
        {
            id: 3,
            titulo: "RT-2024-031 - Laudo Hidráulico Subsolo",
            cliente: "Shopping Center Leste",
            tempo: "10d atrás",
            status: "Enviado"
        }
    ]

    return(
        <main className="app">
            <TopBar title="Ocorrencias" showLogo/>

            <Saudacao/>
            
            <ResumoRelatorios/>

            <NovosRelatorios/>

            <RelatoriosRecentes relatorios={relatorios}/>

            <BottomNav />
        </main>
    )
}

export default App
