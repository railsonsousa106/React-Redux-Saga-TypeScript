import React, { useMemo, useState, useCallback } from 'react';

import { createEditor, Node } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import { withImages, withEmbeds } from './Plugins';
import { Element, Leaf } from './Renderer';

const BlogPreview = (props: any) => {
  const [value, setValue] = useState<Node[]>(props.content)
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withEmbeds(withImages(withReact(createEditor()))), []);

  return (
    // Add the editable component inside the context.
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Editable readOnly renderElement={renderElement} renderLeaf={renderLeaf} spellCheck />
    </Slate>
  );
};

export default BlogPreview;
export { BlogPreview };
