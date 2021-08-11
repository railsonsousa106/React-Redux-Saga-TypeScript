import React from 'react';

import { ImageElement } from './Elements';
import { VideoElement } from './Elements';
import { IProps } from './Types';

const Element = (props: IProps) => {
  const { attributes, children, element } = props;

  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'image':
      return <ImageElement {...props} />;
    case 'video':
      return <VideoElement {...props} />;
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default Element;
export { Element };
