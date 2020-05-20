import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #18191A;
  color: white;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  div:nth-child(1) {
    margin-right: 20px;
  }
  div:nth-child(2) {
    margin-left: 20px;
  }
`;
