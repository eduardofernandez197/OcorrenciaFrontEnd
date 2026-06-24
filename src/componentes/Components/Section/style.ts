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