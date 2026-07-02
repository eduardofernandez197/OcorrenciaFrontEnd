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

import {
  FileText,
  Building2,
  MapPin,
  Layers,
  User,
  Calendar,
  Hash
} from "lucide-react";

export const DadosGerais = () => {
  return (
    <>
      <TopBar title="Dados Gerais" ButtomVoltar />

      <DadosGeraisContainer aria-label="Dados Gerais">
        {/* Indicador visual da etapa atual do formulário. */}
        <ProgressContainer aria-label="Progresso do formulário">
          <ProgressBar>
            <ProgressBarActive />
            <ProgressBarInactive />
          </ProgressBar>

          <ProgressStep>1/2</ProgressStep>
        </ProgressContainer>

        {/* Formulário principal dos dados gerais do relatório. */}
        <FormContainer>
          <FormFieldset>
            <CampoContainer>
              <CampoLabel htmlFor="tituloRelatorio">
                <span className="labelIcone">
                  <FileText size={12} />
                  TÍTULO DO RELATÓRIO <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="tituloRelatorio"
                name="tituloRelatorio"
                type="text"
                placeholder="Ex: RT-2024-047 - Inspeção Elétrica Bloco A"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="cliente">
                <span className="labelIcone">
                  <Building2 size={12} />
                  CLIENTE / PRETENDENTE <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="cliente"
                name="cliente"
                type="text"
                placeholder="Razão social ou nome do cliente"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="localizacao">
                <span className="labelIcone">
                  <MapPin size={12} />
                  LOCALIZAÇÃO <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="localizacao"
                name="localizacao"
                type="text"
                placeholder="Endereço ou descrição do local"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="setor">
                <span className="labelIcone">
                  <Layers size={12} />
                  SETOR
                </span>
              </CampoLabel>
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
              <CampoLabel htmlFor="responsavel">
                <span className="labelIcone">
                  <User size={12} />
                  RESPONSÁVEL <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="responsavel"
                name="responsavel"
                type="text"
                placeholder="Nome do técnico responsável"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="dataInspecao">
                <span className="labelIcone">
                  <Calendar size={12} />
                  DATA DA INSPEÇÃO <span className="corAsterisco">*</span>
                </span>
              </CampoLabel>
              <CampoInput
                id="dataInspecao"
                name="dataInspecao"
                type="text"
                placeholder="dd/mm/aaaa"
                required
              />
            </CampoContainer>

            <CampoContainer>
              <CampoLabel htmlFor="revisao">
                <span className="labelIcone">
                  <Hash size={12} />
                  REVISÃO
                </span>
                </CampoLabel>
              <CampoInput
                id="revisao"
                name="revisao"
                type="text"
                defaultValue="Rev.00"
              />
            </CampoContainer>
          </FormFieldset>

          {/* Ação principal do formulário, mantida no rodapé da tela. */}
          <FormFooter>
            <SalvarButton type="submit">Salvar e Continuar</SalvarButton>
          </FormFooter>
        </FormContainer>
      </DadosGeraisContainer>
    </>
  );
};
