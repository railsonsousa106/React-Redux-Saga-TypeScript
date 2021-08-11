import React from 'react';
import styled from "styled-components";
import { Popover as LibPopover, withStyles } from "@material-ui/core";

export const Wrapper = styled.div`
  display: inline-block;
`;

export const TriggerWrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  color: #7860FA;
  font-size: 1rem;
  line-height: 1.39;
  text-decoration: underline;
  transition: 0.3s linear;
`;

export const ContentWrapper = styled.div`
  ol {
    padding-inline-start: 20px;

    li {
      margin-bottom: 6px;
    }
  }
`;

export const StyledPopover = withStyles({
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    overflow: 'initial !important',
    marginLeft: '-10px',
    marginTop: '-10px',
    padding: '20px',
    fontSize: '14px',
    width: '20vw'
  },
})((props: any) => <LibPopover {...props} />);
