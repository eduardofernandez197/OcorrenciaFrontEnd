import styled from 'styled-components';

export const Saudacoes = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  padding: 10px 15px;
  font-weight: 600;
  font-size: 12px;
  color: #858383;
`;

export const NomeContainer = styled.div`
  display: flex; /* deixa nome e emoji na mesma linha */
  align-items: center; /* centraliza verticalmente dentro do container */
  gap: 5px; /* espaço entre o nome e o emoji */
  font-size: 16px;
  color: black;
`;

export const ResumoContainer = styled.section`
  display: flex;
  gap: 15px;
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const ArticleItemHorizontal = styled.article<{ bgColor?: string; textColor?: string }>`
  display: flex;
  flex-direction: column;  /* empilha número e texto verticalmente */
  align-items: flex-start;
  justify-content: center;
  flex: 1;
  font-size: 18px;
  font-family: Inter, sans-serif;
  height: 80px;
  width: 130px;
  padding: 10px;
  background-color: ${(props) => props.bgColor || '#fff6e5'};
  color: ${(props) => props.textColor || 'black'};
  border-radius: 10px;
  gap: 5px;

  strong {
    font-size: 23px; /* tamanho maior para o número */
    font-weight: bold;
  }

  span {
    font-size: 12px; /* tamanho menor para o texto */
  }
`;

export const NovoRelatorioSection = styled.section`
  padding: 20px 15px;
`;

export const NovoRelatorioButton = styled.button`
  width: 100%;
  min-height: 90px;
  padding: 14px 14px;

  border: none;
  border-radius: 14px;
  background-color: #ff6b00;
  color: white;

  display: flex;
  align-items: center;
  gap: 14px;

  cursor: pointer;

  .icon {
    width: 46px;
    height: 46px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.22);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 30px;
    font-weight: 300;
    line-height: 1;
  }

  .arrow {
    margin-left: auto;
    font-size: 30px;
    font-weight: 300;
    line-height: 1;
  }
`;

export const NovoRelatorioTexto = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  text-align: left;

  span {
    font-size: 16px;
    font-weight: 700;
  }

  small {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const RecentesSection = styled.section`
  flex: 1;
  padding: 0 15px 90px;

  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Recentes = styled.h2`
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: #111827;
`;

export const RelatorioCard = styled.article`
  width: 100%;
  min-height: 118px;
  padding: 16px 16px 12px;

  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 14px;

  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const RelatorioTitulo = styled.h3`
  margin: 0;
  padding-right: 108px;

  color: #111827;
  font-size: 13.5px;
  font-weight: 700;
  line-height: 1.25;
`;

export const RelatorioMeta = styled.p`
  margin: 0;

  color: #64748b;
  font-size: 11.5px;
  line-height: 1.3;
`;

export const RelatorioStatus = styled.span`
  align-self: flex-end;
  margin-top: -43px;
  padding: 3px 8px;

  background-color: #f3f4f6;
  color: #6b7280;
  border-radius: 999px;

  font-size: 11.5px;
  font-weight: 600;
  line-height: 1.2;
`;

export const ContinuarEdicaoButton = styled.button`
  width: 100%;
  min-height: 38px;
  margin-top: 20px;

  border: none;
  border-radius: 10px;
  background-color: #fff4e8;
  color: #ff6b00;

  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
`;
