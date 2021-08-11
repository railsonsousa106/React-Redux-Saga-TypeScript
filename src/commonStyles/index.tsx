import styled, { css } from 'styled-components';

export const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  width: 100%;
`;

export const CommonButton = styled.div`
  padding: 12px 44px;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;

  ${({ background }: { background: string }) =>
    css`
      background: ${background};
    `}
`;

export const BackgroundLine = styled.div`
  position: absolute;
  top: 10px;
  width: 100%;
  content: '';
  height: 20px;
  transition: 0.6s;

  ${({ background }: { background: string }) =>
    css`
      background: ${background};
    `}
`;

export const Point = styled.div`
  width: 1px;
  height: 1px;
  content: '';
  border-radius: 100%;
  border: 1px solid #747474;
  background: #747474;
  margin: 0 13px;
`;

export const Tag = styled.div`
  text-transform: uppercase;
  color: rgba(130, 132, 142, 1);
  font-weight: 600;
  background: rgba(240, 240, 240, 1);
  border-radius: 6px;
  padding: 15px 20px;
  margin: 20px 20px 0 0;
  border: 2px solid transparent;
  box-sizing: border-box;
  transition: 0.4s;
  cursor: pointer;

  :hover {
    border: 2px solid rgba(114, 91, 238, 1);
    color: rgba(114, 91, 238, 1);
  }
`;
