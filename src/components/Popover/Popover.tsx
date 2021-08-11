import React, { FC, ReactNode, useCallback, useState } from 'react';

import { Wrapper, TriggerWrapper, ContentWrapper, StyledPopover } from './Popover.style';

interface Props {
  trigger: ReactNode | ReactNode[];
  children: ReactNode | ReactNode[];
}

const Popover: FC<Props> = ({ trigger, children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const onTriggerClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const onTriggerToggle = useCallback((e) => {
    if (anchorEl) {
      setAnchorEl(null);
      return;
    }
    setAnchorEl(e.target);
  }, [setAnchorEl, anchorEl]);

  return (
    <Wrapper>
      <TriggerWrapper onClick={onTriggerToggle}>
        {trigger}
      </TriggerWrapper>
      <StyledPopover
        disableRestoreFocus
        disableScrollLock
        id="mouse-over-popover"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        onClose={onTriggerClose}
      >
        <ContentWrapper>{children}</ContentWrapper>
      </StyledPopover>
    </Wrapper>
  );
};

export default Popover;
export { Popover };
