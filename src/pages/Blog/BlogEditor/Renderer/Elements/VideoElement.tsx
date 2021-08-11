import React from 'react';

import { IProps } from '../Types';

const VideoElement = (props: IProps) => {
  const { attributes, children, element } = props;
  const { url } = element;
  return (
    <div {...attributes}>
      <div contentEditable={false}>
        <div
          style={{
            padding: '40% 0 0 0',
            position: 'relative',
          }}
        >
          <iframe
            src={`${url}?title=0&byline=0&portrait=0`}
            frameBorder="0"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default VideoElement;
export { VideoElement };
