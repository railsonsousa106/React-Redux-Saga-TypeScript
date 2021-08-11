import styled from "styled-components";

import { Dialog } from "@material-ui/core";

export const MainContainer = styled(Dialog)``;

export const ContentContainer = styled.div`
  width: 100%;
  width: 1150px;
  padding: 60px 0 55px 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 35px;
  top: 35px;
  cursor: pointer;
`;

export const Content = styled.div``;
