import styled from 'styled-components';

export const CreateBlogHeader = styled.div``;

export const CreateBlogContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const TitleBlog = styled.input`
  border: none !important;
  background: transparent;
  width: 100%;
  outline: none;
  transition: 0.4s;
  padding: 0 0 0 30px;
  margin: 55px 0;
  box-sizing: border-box;
  font-size: 57px !important;
  ::placeholder {
    color: #d1d1d1 !important;
    font-weight: normal;
  }
`;

export const ContentAreaBlog = styled.input`
  border: none;
  background: transparent;
  font-size: 16px;
  width: 100%;
  outline: none;
  transition: 0.4s;
  font-size: 20px;
  padding-left: 30px;
  margin: 30px 0;
  box-sizing: border-box;
  ::placeholder {
    color: #d1d1d1;
    letter-spacing: 0px;
    font-weight: normal;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1400px;
  align-items: flex-start;
`;

export const Toggle = styled.div`
  float: right;
  color: black;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  width: 7%;
  border-right: 1px solid #d1d1d1;
  color: #d1d1d1;
  height: 53px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-top: 15px;
  textarea {
    border: none;
    background: transparent;
    resize: none;
    text-align: left;
    font-size: 20px;
    font-family: Poppins, sans-serif;
    width: 100%;
    padding: 0 0 0 30px;
    line-height: 53px;
    ::placeholder {
      color: #d1d1d1;
      line-height: 53px;
    }
    :focus {
      outline: none !important;
    }
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin: 11px 0 60px 0;
  height: 5px;
`;

export const TextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px;
  padding-left: 30px;
`

export const ToolbarInputWrapper = styled.input`
  border: none !important;
  background: transparent;
  width: 100%;
  outline: none;
  transition: 0.4s;
  padding: 0 0 0 30px;
  box-sizing: border-box;
  font-size: 57px !important;
  ::placeholder {
    color: #d1d1d1 !important;
    font-weight: normal;
  }
`;