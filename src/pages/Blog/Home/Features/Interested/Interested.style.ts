import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  background: #fcf0da;
  padding: 27px 30px;
  display: flex;
  margin-top: 80px;
`;

export const TextContainer = styled.div`
  margin-left: 25px;
  h1 {
    color: #000000;
    font-size: 28px;
    font-weight: 600px;
    margin: 0;
  }
`;

export const LinkContainer = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: 400;
  margin-top: 20px;

  a {
    text-decoration: underline;
    transition: 0.3s;
  }

  :hover {
    a {
      color: #7860fa;
    }
  }
`;
