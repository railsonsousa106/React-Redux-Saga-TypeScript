import React, { useEffect, useMemo, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Node, Transforms, createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

import { postBlogActions } from 'redux/postBlog/actions';

import { SlateEditorWrapper } from './BlogEditor.style';
import { withImages, withEmbeds } from './Plugins';
import { Element, Leaf } from './Renderer';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const BlogEditor = (props: any) => {
  const [content, setContent] = useState<Node[]>(initialValue);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(() => withEmbeds(withImages(withHistory(withReact(createEditor())))), []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postBlogActions.setNewPostContent(content));
    dispatch(postBlogActions.setNewPostWordsCount(0));
  });

  useEffect(() => {
    if (props.newVideo) {
      const nodes = [
        { type: 'video', url: props.newVideo, children: [{ text: '' }] },
        { type: 'paragraph', children: [{ text: '' }] },
      ];
      Transforms.insertNodes(editor, nodes);
      props.setNewVideo('');
    }
    if (props.newImage) {
      const nodes = [
        { type: 'image', url: props.newImage, children: [{ text: '' }] },
        { type: 'paragraph', children: [{ text: '' }] },
      ];
      Transforms.insertNodes(editor, nodes);
      props.setNewImage('');
    }
    if (props.newQuote) {
      const nodes = [
        { type: 'block-quote', children: [{ text: props.newQuote }] },
        { type: 'paragraph', children: [{ text: '' }] },
      ];
      Transforms.insertNodes(editor, nodes);
      props.setNewQuote('');
    }
  }, [props.newVideo, props.newImage, props.newQuote]);

  return (
    // Add the editable component inside the context.
    <SlateEditorWrapper style={{ visibility: props.visible ? 'visible' : 'hidden' }}>
      <Slate editor={editor} value={content} onChange={newValue => setContent(newValue)}>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} spellCheck autoFocus />
      </Slate>
    </SlateEditorWrapper>
  );
};

export default BlogEditor;
export { BlogEditor };
