import styled from 'styled-components';

export const AttachmentField = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  p {
    text-align: center;
    color: #82848e;
    letter-spacing: 0.7px;
    font-size: 14px;
    margin: 20px 0 0;
  }
`;

export const DefaultImage = styled.div`
  height: 356px;
  width: 100%;
  background: #fcfdff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 50px;
    height: auto;
  }
`;

export const CustomImage = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    max-height: 100%;
    max-width: 100%;
  }
`;
