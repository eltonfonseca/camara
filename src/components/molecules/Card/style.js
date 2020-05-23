import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 30px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px ${({ theme }) => theme.colors.shadowColor};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
