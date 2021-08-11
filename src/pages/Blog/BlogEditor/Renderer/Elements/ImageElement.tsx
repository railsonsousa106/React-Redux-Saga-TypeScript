import React from 'react';
import { useSelected, useFocused } from 'slate-react';

import { IProps } from '../Types';

const ImageElement = ({ attributes, children, element }: IProps) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <div contentEditable={false} {...attributes}>
      <div>
        <img
          src={element.url}
          style={{
            display: 'block',
            maxWidth: '100%',
            maxHeight: '20em',
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
          }}
        />
      </div>
      {children}
    </div>
  );
};

export default ImageElement;
export { ImageElement };
