import imageExtensions from 'image-extensions';
import { Transforms } from 'slate';

const insertImage = (editor: any, url: any) => {
  const text = { text: '' };
  const image = { type: 'image', url, children: [text] };
  Transforms.insertNodes(editor, image);
};

const isUrl = (url: string) => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i' // fragment locator
  );
  return !!pattern.test(url);
};

const isImageUrl = (url: string) => {
  if (!url) return false;
  if (!isUrl(url)) return false;
  const ext = new URL(url).pathname.split('.').pop();
  return imageExtensions.includes(ext ? ext : '');
};

const withImages = (editor: any) => {
  const { insertData, isVoid } = editor;

  editor.isVoid = (element: any) => {
    return element.type === 'image' ? true : isVoid(element);
  };

  editor.insertData = (data: any) => {
    const text = data.getData('text/plain');
    const { files } = data;

    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            insertImage(editor, url);
          });

          reader.readAsDataURL(file);
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export default withImages;
export { withImages };
