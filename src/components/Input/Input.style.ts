import styled from 'styled-components';

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  :focus {
    color: red;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  top: 5px;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.errorColor} !important;
  opacity: 1;
  margin: 10px 0 0 0;
  width: 100%;
  display: flex;
  font-size: 12px;
  font-weight: 600;
  justify-content: flex-end;
  @media (max-width: 900px) {
    margin: 10px 0 0 0px;
  }
`;
