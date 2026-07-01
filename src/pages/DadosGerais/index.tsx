import { TopBar } from "../../componentes/Components/TopBar";
import {
  CampoContainer,
  CampoInput,
  CampoLabel,
  DadosGeraisContainer,
  FormContainer,
  FormFieldset,
  FormFooter,
  ProgressBar,
  ProgressBarActive,
  ProgressBarInactive,
  ProgressContainer,
  ProgressStep,
  SalvarButton
} from "./style";

export const DadosGerais = () => {
  return (
    <>
      <TopBar title="Dados Gerais" ButtomVoltar />

      <DadosGeraisContainer aria-labelledby="dados-gerais-title">
        <ProgressContainer aria-label="Progresso do formulário">
          <ProgressBar>
            <ProgressBarActive />
            <ProgressBarInactive />
          </ProgressBar>

          <ProgressStep>1/2</ProgressStep>
        </ProgressContainer>

        <FormContainer>
          <FormFieldset>
            <CampoContainer>
              <CampoLabel htmlFor="tituloRelatorio">TÍTULO DO RELATÓRIO *</CampoLabel>
              <CampoInput
                id="tituloRelatorio"
                name="tituloRelatorio"
                type="text"
                placeholder="Ex: RT-2024-047 - Inspeção Elétrica Bloco A"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="cliente">CLIENTE / PRETENDENTE *</CampoLabel>
              <CampoInput
                id="cliente"
                name="cliente"
                type="text"
                placeholder="Razão social ou nome do cliente"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="localizacao">LOCALIZAÇÃO *</CampoLabel>
              <CampoInput
                id="localizacao"
                name="localizacao"
                type="text"
                placeholder="Endereço ou descrição do local"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="setor">SETOR</CampoLabel>
              <CampoInput
                id="setor"
                name="setor"
                type="text"
                placeholder="Ex: Setor Elétrico"
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="area">ÁREA</CampoLabel>
              <CampoInput
                id="area"
                name="area"
                type="text"
                placeholder="Ex: Área Comum"
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="departamento">DEPARTAMENTO</CampoLabel>
              <CampoInput
                id="departamento"
                name="departamento"
                type="text"
                placeholder="Ex: Manutenção"
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="responsavel">RESPONSÁVEL *</CampoLabel>
              <CampoInput
                id="responsavel"
                name="responsavel"
                type="text"
                placeholder="Nome do técnico responsável"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="dataInspecao">DATA DA INSPEÇÃO *</CampoLabel>
              <CampoInput
                id="dataInspecao"
                name="dataInspecao"
                type="text"
                placeholder="dd/mm/aaaa"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="revisao">REVISÃO</CampoLabel>
              <CampoInput
                id="revisao"
                name="revisao"
                type="text"
                defaultValue="Rev.00"
              />
            </CampoContainer>
          </FormFieldset>

          <FormFooter>
            <SalvarButton type="submit">Salvar e Continuar</SalvarButton>
          </FormFooter>
        </FormContainer>
      </DadosGeraisContainer>
    </>
  );
};
