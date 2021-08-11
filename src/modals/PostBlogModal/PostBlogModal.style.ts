import styled from "styled-components";

import { Dialog } from "@material-ui/core";

export const MainContainer = styled(Dialog)`
  overflow-y: visible;
  margin: 60px 112px 60px 109px;
`;

export const ContentContainer = styled.div`
  padding: 63px 132px 32px 128px;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 35px;
  top: 35px;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;
