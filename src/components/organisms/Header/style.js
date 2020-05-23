import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.colors.shadowColor};
`;
