import React, { FC, ReactNode, useCallback, useState } from 'react';
import { ClickAwayListener, Tooltip as LibTooltip, withStyles } from '@material-ui/core';

import { TooltipWrapper, TriggerWrapper, ContentWrapper } from './Tooltip.style';

interface Props {
  trigger: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
  styles?: { [keyName: string]: number | string };
}

const getStyledTooltip = (extraStyles: { [keyName: string]: number | string }) =>
  withStyles(theme => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      padding: 14,
      fontSize: 14,
      fontWeight: 400,
      pointerEvents: 'all',
      ...extraStyles,
    },
  }))(LibTooltip);

const Tooltip: FC<Props> = ({ trigger, children, styles }) => {
  const [open, setOpen] = useState<boolean>(false);
  const StyledTooltip = getStyledTooltip({ ...styles });

  const onCloseClick = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onOpenClick = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  return (
    <ClickAwayListener onClickAway={onCloseClick}>
      <TooltipWrapper>
        <StyledTooltip
          arrow
          placement="top"
          disableFocusListener
          disableHoverListener
          disableTouchListener
          open={open}
          title={<ContentWrapper>{children}</ContentWrapper>}
        >
          <TriggerWrapper onClick={onOpenClick}>{trigger}</TriggerWrapper>
        </StyledTooltip>
      </TooltipWrapper>
    </ClickAwayListener>
  );
};

export default Tooltip;
export { Tooltip };
