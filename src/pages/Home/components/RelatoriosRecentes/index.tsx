import {
    ContinuarEdicaoButton,
    Recentes,
    RecentesSection,
    RelatorioCard,
    RelatorioMeta,
    RelatorioStatus,
    RelatorioTitulo
} from "./style";

type Relatorio = {
    id: number;
    titulo: string;
    cliente: string;
    tempo: string;
    status: string;
}

type RelatoriosRecentesProps = {
    relatorios: Relatorio[];
}

export const RelatoriosRecentes = ({ relatorios }: RelatoriosRecentesProps) => {
    return (
        <RecentesSection aria-labelledby="recentes-title">
            <Recentes id="recentes-title">Recentes</Recentes>

            {relatorios.length === 0 ? (
                <div>
                    <p>Nenhum relatório criado ainda.</p>
                    <button type="button">Novo Relatório</button>
                </div>
            ) : (
                relatorios.map((relatorio) => (
                    <RelatorioCard key={relatorio.id}>
                        <RelatorioTitulo>{relatorio.titulo}</RelatorioTitulo>
                        <RelatorioMeta>{relatorio.cliente} · {relatorio.tempo}</RelatorioMeta>
                        <RelatorioStatus>{relatorio.status}</RelatorioStatus>

                        {relatorio.status === "Rascunho" && (
                            <ContinuarEdicaoButton type="button">
                                Continuar edição
                            </ContinuarEdicaoButton>
                        )}
                    </RelatorioCard>
                ))
            )}
        </RecentesSection>
    )
}
