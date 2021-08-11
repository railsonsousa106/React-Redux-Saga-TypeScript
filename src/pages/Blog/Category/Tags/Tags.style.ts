import styled from "styled-components";

export const MainContainer = styled.div`
  border-bottom: 1px solid rgba(213, 213, 213, 1);
  padding-bottom: 25px;
  margin-top: 25px;
  display: flex;
  transition: 0.4s;

  p {
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    color: rgba(130, 132, 142, 1);
    margin: 0 40px 0 0;
    cursor: pointer;

    :hover {
      color: rgba(120, 96, 250, 1);
    }
  }
`;
