import {
    ArticleItemHorizontal,
    ContinuarEdicaoButton,
    NomeContainer,
    NovoRelatorioButton,
    NovoRelatorioSection,
    NovoRelatorioTexto,
    Recentes,
    RecentesSection,
    RelatorioCard,
    RelatorioMeta,
    RelatorioStatus,
    RelatorioTitulo,
    ResumoContainer,
    Saudacoes
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

export const Saudacao = () => {
    return (
        <Saudacoes>
            <p aria-label="Saudação do usuário">Bom dia,</p>
            <NomeContainer>
                <span id="saudacao">Eng. Neto Silva</span>
                <span role="img" aria-label="engenheiro">👷‍♂️</span>
            </NomeContainer>
        </Saudacoes>
    );
};

export const ResumoRelatorios = () => {
    return (
        <ResumoContainer aria-label="Resumo dos relatórios">
            <ArticleItemHorizontal bgColor="#f9fafb">
                <strong style={{ color: "#6b7280" }}>1</strong>
                <span style={{ color: "#6b7280" }}>Rascunhos</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#ecfdf5">
                <strong style={{ color: "#059669" }}>1</strong>
                <span style={{ color: "#059669" }}>Finalizados</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#eff6ff">
                <strong style={{ color: "#2563eb" }}>1</strong>
                <span style={{ color: "#2563eb" }}>Enviados</span>
            </ArticleItemHorizontal>
        </ResumoContainer>
    )
}

export const NovosRelatorios = () => {
    return (
        <NovoRelatorioSection aria-label="Criar novo relatório">
            <NovoRelatorioButton type="button">
                <span className="icon">+</span>
                <NovoRelatorioTexto>
                    <span>Novo Relatório</span>
                    <small>Criar um novo relatório de inspeção</small>
                </NovoRelatorioTexto>
                <span className="arrow">›</span>
            </NovoRelatorioButton>
        </NovoRelatorioSection>
    )
}

export const RelatoriosRecentes = ({ relatorios }: RelatoriosRecentesProps) => {
    return (

        //section de relatórios recentes.
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
