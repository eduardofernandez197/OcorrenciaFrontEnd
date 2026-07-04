import styled from "styled-components";

export const PreVisualizacaoContainer = styled.main`
  min-height: calc(100vh - 52px);
  padding: 16px;
  padding-bottom: 112px;

  background-color: #f3f4f6;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RelatorioCard = styled.article`
  background-color: #ffffff;
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 16px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderIcone = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 8px;
  background-color: #ff6b00;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: #111827;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.15;
  }

  p,
  span {
    color: #6b7280;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.2;
  }
`;

export const SectionInfContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const RelatorioTipo = styled.p`
  color: #f97316;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.2;
  text-transform: uppercase;
`;

export const RelatorioTitulo = styled.h1`
  color: #1a1d23;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.25;
`;

export const RelatorioCliente = styled.p`
  color: #6b7280;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.3;
`;

export const RelatorioInfoGrid = styled.section`
  display: grid;
  /* 6 colunas permitem dividir a linha em 2 partes iguais ou 3 partes iguais. */
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;

export const InfoItem = styled.div`
  min-height: 50px;
  padding: 9px 10px;

  border-radius: 10px;
  background-color: #f1f3f5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;

  /* span-3 ocupa metade da linha: 3 de 6 colunas. */
  &.span-3 {
    grid-column: span 3;
  }

  /* span-2 ocupa um terço da linha: 2 de 6 colunas. */
  &.span-2 {
    grid-column: span 2;
  }

  span {
    color: #64748b;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: 0.5px;
  }

  strong {
    color: #111827;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.2;
  }
`;

export const ObservacaoContainer = styled.article`
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

export const ObservacaoHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 14px;
  border-bottom: 1px solid #e5e7eb;
`;

export const ObservacaoNumero = styled.span`
  width: 34px;
  height: 34px;

  border-radius: 10px;
  background-color: #ff6b00;
  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  font-weight: 700;
`;

export const ObservacaoHeaderTexto = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  strong {
    color: #ff6b00;
    font-size: 11px;
    font-weight: 700;
    line-height: 1.1;
  }

  h2 {
    color: #111827;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.2;
  }
`;


