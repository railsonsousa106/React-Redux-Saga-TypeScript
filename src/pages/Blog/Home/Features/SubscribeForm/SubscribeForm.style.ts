import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  background: #fafafa;
  padding: 40px 33px;
  margin-top: 80px;

  h1 {
    color: #000000;
    font-size: 28px;
    font-weight: 600;
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 30px;
`;

export const StyledEmailInput = styled.input`
  width: 300px;
  border-radius: 5px 0 0 5px;
  background: #fff;
  padding: 20px 25px;
  border: none;
  outline: none;
  transition: 0.4s;
  border: 1px solid transparent;
  font-size: 20px;

  :hover {
    border: 1px solid #c6c6c6;
  }

  :focus {
    border: 1px solid #c6c6c6;
    ::placeholder {
      color: #c4c4c4;
    }
  }

  ::placeholder {
    color: #747474;
    font-size: 16px;
    font-weight: 400;
  }
`;
