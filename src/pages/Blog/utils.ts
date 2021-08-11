import { convertFromRaw } from 'draft-js';

export const getBlogTexts = (json: string) => {
  const content = convertFromRaw(JSON.parse(json));
  return content
    .getBlocksAsArray()
    .map((block: any) => {
      return block.getText();
    })
    .join(' ');
};
