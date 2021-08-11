import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  
  iframe {
    width: calc(100vw - 400px);
    height: auto;
    min-height: calc(100vh - 300px);
    margin: 2rem 200px;
  }
`;
