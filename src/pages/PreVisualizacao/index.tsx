import { TopBar } from "../../componentes/Components/TopBar";
import { AcoesFooter, BotaoAcao, FotoFigure, HeaderContainer, HeaderIcone, HeaderTexto, InfoItem, NumeroFoto, ObservacaoContainer, ObservacaoDescricao, ObservacaoHeader, ObservacaoHeaderTexto, ObservacaoNumero, PreVisualizacaoContainer, RegistroFotografico, RegistroTitulo, RelatorioAssinaturaFooter, RelatorioCard, RelatorioCliente, RelatorioInfoGrid, RelatorioTipo, RelatorioTitulo, SectionInfContainer } from "./style";
import { FileText } from "lucide-react";
import imagemteste from "../../assets/imagens/imagemteste.png";

export const PreVisualizacao = () => {
  return (
    <>
      <TopBar title="Pré-visualização" ButtomVoltar />

      <PreVisualizacaoContainer aria-label="Pré-visualização do relatório">
        <section aria-label="Resumo do relatório">
          <RelatorioCard>
            <HeaderContainer>
              <HeaderIcone>
                <FileText size={16}/>
              </HeaderIcone>

              <HeaderTexto>
                <strong>TechReport</strong>
                <p>Relatório Técnico</p>
              </HeaderTexto>
            </HeaderContainer>

            <SectionInfContainer>
              <RelatorioTipo>RELATÓRIO TÉCNICO DE INSPEÇÃO</RelatorioTipo>
              <RelatorioTitulo>RT-2024-042 – Inspeção Elétrica Bloco A</RelatorioTitulo>
              <RelatorioCliente>Construtora Ômega Ltda.</RelatorioCliente>
            </SectionInfContainer>

            <RelatorioInfoGrid aria-label="Informações gerais">
              <InfoItem className="span-3">
                <span>LOCALIZAÇÃO</span>
                <strong>Rua das Flores, 240 – São Paulo</strong>
              </InfoItem>

              <InfoItem className="span-3">
                <span>RESPONSÁVEL</span>
                <strong>Eng. Neto Silva</strong>
              </InfoItem>

              <InfoItem className="span-3">
                <span>DATA</span>
                <strong>15/11/2024</strong>
              </InfoItem>

              <InfoItem className="span-3">
                <span>REVISÃO</span>
                <strong>Rev.01</strong>
              </InfoItem>

              <InfoItem className="span-2">
                <span >SETOR</span>
                <strong>Elétrico</strong>
              </InfoItem>

              <InfoItem className="span-2">
                <span>ÁREA</span>
                <strong>Área Comum</strong>
              </InfoItem>

              <InfoItem className="span-2">
                <span>DEPTO.</span>
                <strong>Manutenção</strong>
              </InfoItem>
            </RelatorioInfoGrid>
          </RelatorioCard>
        </section>

        <section aria-label="Observações do relatório">
          <ObservacaoContainer>
            <ObservacaoHeader>
              <ObservacaoNumero>01</ObservacaoNumero>

              <ObservacaoHeaderTexto>
                <strong>OBSERVAÇÃO 01</strong>
                <h2>Quadro de distribuição</h2>
              </ObservacaoHeaderTexto>
            </ObservacaoHeader>

            <ObservacaoDescricao>
              <h3>OBSERVAÇÕES</h3>
              <p>Quadro com ferrugem avançada na tampa.</p>
            </ObservacaoDescricao>

            <RegistroFotografico>
              <RegistroTitulo>
                 <h3>REGISTRO FOTOGRÁFICO</h3>
                 <strong>— OBSERVAÇÃO 01</strong>
              </RegistroTitulo>

              <FotoFigure>
                <NumeroFoto>Foto 01</NumeroFoto>
                <img src={imagemteste} alt="Registro fotográfico da observação 01" />
              </FotoFigure>
            </RegistroFotografico>
          </ObservacaoContainer>
        </section>

        <RelatorioAssinaturaFooter aria-label="Informações do relatório">
          <span>TechReport · 04/07/2026</span>
          <strong>Eng. Neto Silva</strong>
        </RelatorioAssinaturaFooter>

        <AcoesFooter aria-label="Ações do relatório">
          <BotaoAcao className="documento" type="button">
            Gerar Documento
          </BotaoAcao>

          <BotaoAcao className="email" type="button">
            Enviar E-mail
          </BotaoAcao>                    
        </AcoesFooter>
      </PreVisualizacaoContainer>
    </>
  );
};
