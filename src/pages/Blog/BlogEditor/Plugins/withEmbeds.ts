const withEmbeds = (editor: any) => {
  const { isVoid } = editor;
  editor.isVoid = (element: any) => (element.type === 'video' ? true : isVoid(element));
  return editor;
};

export default withEmbeds;
export { withEmbeds };
