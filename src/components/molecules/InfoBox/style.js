import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px ${({ theme }) => theme.colors.shadowColor};

  h1 {
    border-bottom: 1px ${({ theme }) => theme.colors.fontColor} solid;
    margin-bottom: 10px;
  }
`;
