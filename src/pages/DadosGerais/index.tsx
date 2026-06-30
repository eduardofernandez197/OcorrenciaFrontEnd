import { TopBar } from "../../componentes/Components/TopBar";
import { DadosGeraisContainer, ProgressBar, ProgressContainer, ProgressFill, ProgressStep } from "./style";

export const DadosGerais = () => {
  return (
    <>
      <TopBar title="Dados Gerais" ButtomVoltar />

      <DadosGeraisContainer aria-labelledby="dados-gerais-title">
        <ProgressContainer aria-label="Progresso do formulário">
          <ProgressBar>
            <ProgressFill />
          </ProgressBar>

          <ProgressStep>1/2</ProgressStep>
        </ProgressContainer>

        <form>
          <fieldset>
            <div>
              <label htmlFor="tituloRelatorio">TÍTULO DO RELATÓRIO *</label>
              <input
                id="tituloRelatorio"
                name="tituloRelatorio"
                type="text"
                placeholder="Ex: RT-2024-047 - Inspeção Elétrica Bloco A"
                required
              />
            </div>

            <div>
              <label htmlFor="cliente">CLIENTE / PRETENDENTE *</label>
              <input
                id="cliente"
                name="cliente"
                type="text"
                placeholder="Razão social ou nome do cliente"
                required
              />
            </div>

            <div>
              <label htmlFor="localizacao">LOCALIZAÇÃO *</label>
              <input
                id="localizacao"
                name="localizacao"
                type="text"
                placeholder="Endereço ou descrição do local"
                required
              />
            </div>

            <div>
              <label htmlFor="setor">SETOR</label>
              <input
                id="setor"
                name="setor"
                type="text"
                placeholder="Ex: Setor Elétrico"
              />
            </div>

            <div>
              <label htmlFor="area">ÁREA</label>
              <input
                id="area"
                name="area"
                type="text"
                placeholder="Ex: Área Comum"
              />
            </div>

            <div>
              <label htmlFor="departamento">DEPARTAMENTO</label>
              <input
                id="departamento"
                name="departamento"
                type="text"
                placeholder="Ex: Manutenção"
              />
            </div>

            <div>
              <label htmlFor="responsavel">RESPONSÁVEL *</label>
              <input
                id="responsavel"
                name="responsavel"
                type="text"
                placeholder="Nome do técnico responsável"
                required
              />
            </div>

            <div>
              <label htmlFor="dataInspecao">DATA DA INSPEÇÃO *</label>
              <input
                id="dataInspecao"
                name="dataInspecao"
                type="text"
                placeholder="dd/mm/aaaa"
                required
              />
            </div>

            <div>
              <label htmlFor="revisao">REVISÃO</label>
              <input
                id="revisao"
                name="revisao"
                type="text"
                defaultValue="Rev.00"
              />
            </div>
          </fieldset>

          <footer>
            <button type="submit">Salvar e Continuar</button>
          </footer>
        </form>
      </DadosGeraisContainer>
    </>
  );
};
