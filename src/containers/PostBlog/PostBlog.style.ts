import styled, { css } from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LeftSide = styled.div`
  margin-right: 133px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  h1 {
    margin: 0 0 39px 0;
    font-size: 30px;
    font-weight: 600;
    color: #000000;
  }
  width: 100%;
  height: 100%;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  h3 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
    color: #000000;
    text-align: left;
  }

  .css-1wa3eu0-placeholder {
    letter-spacing: 0px;
    color: #d1d1d1;
    font: normal normal normal 16px/31px Poppins;
  }

  width: 100%;
  height: 100%;
`;

export const TagSection = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 49px 0 95px !important;
  width: 100%;
  letter-spacing: 0px;

  .css-yk16xz-control {
    display: flex;
    align-items: flex-start;
    min-height: 104px;
  }

  .css-g1d714-ValueContainer {
    div {
      width: auto !important;
    }
  }

  .css-1rhbuit-multiValue {
    padding: 12px 10px 12px 14px;
    border-radius: 6px;
    div {
      letter-spacing: 1.3px;
      color: #82848e !important;
      text-transform: uppercase;
      font-size: 13px !important;
    }
  }

  .css-1hb7zxy-IndicatorsContainer {
    display: none;
  }
`;

export const CategoryMenu = styled.div`
  margin: 26px 0;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0px;

  .select__indicator-separator.css-1okebmr-indicatorSeparator {
    display: none;
  }

  .css-1uccc91-singleValue {
    letter-spacing: 0px;
  }
`;

export const PostTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 66px;
  padding-bottom: 14px;
  border-bottom: 1px solid #d1d1d1;
`;

export const PostContent = styled.div`
  margin-top: 50px;
  text-align: left;
  letter-spacing: 0px;
  font-size: 16px;
`;

export const PostCount = styled.div`
  margin: 30px 0 27px;
  padding-bottom: 14px;
  border-bottom: 1px solid #d1d1d1;
  color: #82848e;
`;

export const Label = styled.div`
  margin-top: 42px;
  text-align: left;
  letter-spacing: 0px;
  font-size: 16px;
`;

export const StyledButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  button {
    background: #27b3b6;
    padding: 16px 35px 15px;
    box-sizing: border-box;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    user-select: none;
    font-weight: 600;
    font-family: Poppins;
    font-size: 16px;
    width: fit-content;
  }

  ${({ isBlocked }: { isBlocked?: boolean }) =>
    isBlocked &&
    css`
      background: #aaa;
    `}
`;
