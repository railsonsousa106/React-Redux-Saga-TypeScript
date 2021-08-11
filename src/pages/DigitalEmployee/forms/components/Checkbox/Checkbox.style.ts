import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding-top: 2rem;

  label {
    position: relative;
  
    input {
      position: absolute;
      height: 16px;
      width: 16px !important;
      left: 0;
      top: 0;
    }

    input + span {
      margin-left: 24px;
    }
  }
`;
