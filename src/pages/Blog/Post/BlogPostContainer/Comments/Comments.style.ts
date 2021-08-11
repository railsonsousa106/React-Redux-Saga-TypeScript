import styled from "styled-components";
import { Drawer } from "@material-ui/core";

export const StyledDrawer = styled(Drawer)``;

export const CommentsWrapper = styled.div`
  padding: 70px 0px;
`;

export const MainContainer = styled.div`
  padding: 70px 50px;
  width: 530px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  h1 {
    color: #0b0b09;
    font-size: 24px;
    font-weight: 600;
    margin: 0;
  }
`;

export const CloseIconContainer = styled.div`
  cursor: pointer;
`;

export const CommentTextarea = styled.textarea`
  width: 100%;
  padding: 30px 25px;
  box-sizing: border-box;
  color: #82848e;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #d1d1d1;
  resize: none;
  min-height: 170px;
  outline: none;
  margin-top: 70px;
`;

export const CommentsContainer = styled.div`
  flex: 1 0 auto;
  overflow: auto;
  margin-top: 20px;
`;

export const Comment = styled.div`
  padding: 30px 0;
  width: 100%;
  border-bottom: 1px solid #d1d1d1;

  p {
    font-size: 16px;
    font-weight: 500;
    color: #0b0b09;
    margin: 25px 0 0 0;
    line-height: 28px;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
`;

export const AuthorInfoContainer = styled.div`
  margin-left: 15px;

  h1 {
    font-size: 18px;
    font-weight: 500;
    color: #0b0b09;
    margin: 0;
  }

  p {
    color: #82848e;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    line-height: 30px;
  }
`;

export const Avatar = styled.div`
  width: 60px;
  height: 60px;
  overflow: hidden;
  border-radius: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`;


export const StyledButton = styled.div`
  width: 100%;
  background: #e84312;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  font-weight: 600;
  transition: 0.3s;
`;