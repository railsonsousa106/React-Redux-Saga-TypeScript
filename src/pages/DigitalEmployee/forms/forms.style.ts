import { Tooltip, withStyles } from '@material-ui/core';
import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 15px;
  width: 100%;
  outline: none;
  &:disabled {
    background: rgba(0, 0, 0, 0.2) !important;
    cursor: not-allowed;
  }
`;

export const StyledButton = styled.button<{ margin?: number }>`
  width: 100%;
  margin-top: ${({ margin }) => margin ?? 30}px;
  &:disabled {
    background: rgba(0, 0, 0, 0.2) !important;
    cursor: not-allowed;
  }
`;

export const FormWrapper = styled.div<{ height?: number }>`
  width: 100%;
  padding: 12px 24px 24px 24px;
  min-height: ${({ height }) => height || 418}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .basic-single {
    margin-top: 15px;
    font-size: 14px;
    font-weight: 400;

    .select__control {
      border: 0.0625rem solid #e4e8eb;
      padding: 8px;

      &:hover {
        border-color: #0b0b09;
      }
    }
  }

  .check-configuration-instruction-label {
    font-size: 1rem !important;
  }
`;

export const Header = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

export const Wrapper = styled.div`
  margin-top: 24px;
  text-align: left;
  height: 100%;
  a {
    display: block;
    margin-top: 24px;
  }
  h1 {
    text-align: center;
  }
`;

export const Text = styled.div<{ isSuccess?: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 16px;
  color: ${({ isSuccess }) => (isSuccess ? '#00cc00' : '#cc0000')};
`;

export const GridWrapper = styled.div`
  margin-top: 16px;
`;

export const HelpTool = styled.div`
  cursor: pointer;
`;

export const HelpContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  
  .MuiSvgIcon-root {
    cursor: pointer;
    margin-right: 6px;
  }
  
  span {
    cursor: pointer;
    font-size: 0.8rem;
    color: #7860FA;
  }
`;

export const LightTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    padding: 14,
    fontSize: 14,
    pointerEvents: 'all',
    '& a': {
      display: 'block',
      fontSize: 18,
      marginTop: 8,
    },
  },
}))(Tooltip);

export const FinishWrapper = styled.div`
  display: flex;
  padding: 20px;

  .finish-icon {
    .MuiSvgIcon-fontSizeLarge {
      font-size: 6em;
      color: green;
    }
  }
  .finish-message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding: 0 18px;

    span {
      margin-bottom: 6px;
    }
  }
`;
