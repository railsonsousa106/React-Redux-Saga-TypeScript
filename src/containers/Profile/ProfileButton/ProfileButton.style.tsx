import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Popover, withStyles } from '@material-ui/core';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  cursor: pointer;
`;

export const BellItemContainer = styled.div`
  border-right: 1px solid rgba(209, 209, 209, 1);
  padding: 0 25px 0 0;
  margin: 0 25px 0 0;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  p {
    color: rgba(11, 11, 9, 1);
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 0 15px;
    width: 140px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid #eee;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ArrowContainer = styled.div`
  margin-left: 45px;
  cursor: pointer;
`;

export const StyledPopover = withStyles({
  paper: {
    overflow: 'initial !important',
    marginLeft: '-10px',
    marginTop: '15px',
    '@media (max-width:1200px)': {
      // eslint-disable-line no-useless-computed-key
      display: 'none',
    },
  },
})((props: any) => <Popover {...props} />);

export const ArrowPopover = styled.div`
  position: absolute;
  top: -10px;
  right: 80px;
  width: 20px;
  content: '';
  height: 20px;
  transform: rotate(45deg);
  z-index: 0;
  background: #ffffff;
  border-top: 1px solid #d1d1d1;
  border-left: 1px solid #d1d1d1;
`;

export const Menu = styled.div`
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 3px;
`;

export const MenuElement = styled(NavLink)`
  color: #82848e;
  font-size: 16px;
  font-weight: 400;
  width: 150px;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
  :first-child {
    margin-top: 0;
  }
  :hover {
    text-decoration: underline;
  }
`;
export const MenuElement1 = styled.div`
  color: #82848e;
  font-size: 16px;
  font-weight: 400;
  width: 150px;
  margin-top: 20px;
  cursor: pointer;

  :first-child {
    margin-top: 0;
  }

  :hover {
    text-decoration: underline;
  }
`;

export const SplitLine = styled.div`
  width: 100%;
  background: #d1d1d1;
  height: 1px;
  width: 100%;
  content: '';
  margin-top: 20px;
`;
