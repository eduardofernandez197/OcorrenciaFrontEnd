import styled from 'styled-components';

export const DadosGeraisContainer = styled.section`
  flex: 1;
  width: 100%;
  min-height: 0;
  padding: 16px 17px 0;
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  flex: 1;
  display: flex;
  gap: 9px;
  height: 6px;
`;

export const ProgressBarActive = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 999px;
  background-color: #ff6b00;
`;

export const ProgressBarInactive = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 999px;
  background-color: #e5e7eb;
`;

export const ProgressStep = styled.span`
  color: #475569;
  font-size: 12px;
  font-weight: 500;
`;

export const FormContainer = styled.form`
  flex: 1;
  min-height: 0;

  display: flex;
  flex-direction: column;
`;

export const FormFieldset = styled.fieldset`
  flex: 1;
  min-height: 0;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  gap: 14px;

  border: none;
  padding: 0;
  margin: 0;
`;

export const FormLegend = styled.legend`
`;

export const CampoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const CampoLabel = styled.label`
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4px;
`;

export const CampoInput = styled.input`
  width: 100%;
  height: 44px;
  padding: 0 14px;

  border: 1px solid #e2e8f0;
  border-radius: 11px;
  background-color: #ffffff;

  color: #111827;
  font-size: 14px;
`;

export const FormFooter = styled.footer`
  padding: 16px 0;
  background-color: #f5f5f5;
`;

export const SalvarButton = styled.button`
  width: 100%;
  height: 52px;

  border: none;
  border-radius: 14px;
  background-color: #ffc199;
  color: #ffffff;

  font-size: 16px;
  font-weight: 700;
`;
