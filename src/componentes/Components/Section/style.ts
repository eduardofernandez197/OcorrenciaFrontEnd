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
  min-height: 82px;
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
