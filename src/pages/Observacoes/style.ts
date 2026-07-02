import styled from 'styled-components';

// Container principal da tela abaixo da TopBar.
export const ObservacoesContainer = styled.section`
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 16px 17px 0;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;

// Indicador visual da etapa 2/2.
export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 20px;
`;

// Agrupa as duas faixas preenchidas do progresso.
export const ProgressBar = styled.div`
  flex: 1;
  display: flex;
  gap: 7px;
  height: 6px;
`;

export const ProgressBarActive = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 999px;
  background-color: #ff6b00;
`;

export const ProgressStep = styled.span`
  color: #475569;
  font-size: 11px;
  font-weight: 500;
`;

// Estado vazio exibido quando ainda nao existem observacoes.
export const ObservacoesVazioContainer = styled.div`
  flex: 1;
  padding-top: 70px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  text-align: center;

  h2 {
    color: #1a1d23;
    font-size: 13px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    margin: 0;
  }

  p {
    color: #6b7280;
    font-size: 12px;
    font-weight: 400;
    margin: 0;
  }
`;

// Caixa visual que envolve o icone do estado vazio.
export const ContainerIconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 14px;

  background-color: #f0f1f3;
  color: #64748b;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// Rodape da tela com a acao principal.
export const ObservacoesFooter = styled.footer`
  padding: 16px 0 14px;
  background-color: #f5f5f5;
`;

// Botao principal para adicionar uma nova observacao.
export const AdicionarObservacaoButton = styled.button`
  width: 100%;
  height: 48px;

  border: none;
  border-radius: 14px;
  background-color: #f97316;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;

  .buttonIcon {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: 400;
    line-height: 1;
  }  
`;
