import { ArticleItemHorizontal, NomeContainer, NovoRelatorioButton, NovoRelatorioSection, NovoRelatorioTexto, ResumoContainer, Saudacoes } from "./style";


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
                <strong style={{ color: "#6b7280"}}>1</strong>
                <span style={{ color: "#6b7280"}}>Rascunhos</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#ecfdf5">
                <strong style={{ color: "#059669"}}>1</strong>
                <span style={{ color: "#059669"}}>Finalizados</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#eff6ff">
                <strong style={{ color: "#2563eb"}}>1</strong>
                <span style={{ color: "#2563eb"}}>Enviados</span>
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
              <small>Criar um novo relatório de inspeçao</small>
            </NovoRelatorioTexto>
                <span className="arrow">›</span>
          </NovoRelatorioButton>
      </NovoRelatorioSection>
    )
}