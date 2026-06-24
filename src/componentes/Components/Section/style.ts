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
  gap: 5px;
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
  height: 60px;
  width: 130px;
  padding: 10px;
  background-color: ${(props) => props.bgColor || '#fff6e5'};
  color: ${(props) => props.textColor || 'black'};
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  gap: 5px;
  
`;