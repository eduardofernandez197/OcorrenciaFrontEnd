import { ArticleItemHorizontal, NomeContainer, ResumoContainer, Saudacoes } from "./style";


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
            <ArticleItemHorizontal bgColor="#E6E6E6">
                <strong style={{ color: "#9E9D9D"}}>1</strong>
                <span style={{ color: "#9E9D9D"}}>Rascunhos</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#F2FAF2">
                <strong style={{ color: "#44B244"}}>1</strong>
                <span style={{ color: "#44B244"}}>Finalizados</span>
            </ArticleItemHorizontal>

            <ArticleItemHorizontal bgColor="#F2FBFF">
                <strong style={{ color: "#1E3FE8"}}>1</strong>
                <span style={{ color: "#1E3FE8"}}>Enviados</span>
            </ArticleItemHorizontal>
         </ResumoContainer>
    )
}