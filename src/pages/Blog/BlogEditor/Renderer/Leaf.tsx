import React from 'react';

interface IProps {
  attributes: any;
  children: any;
  leaf: any;
}

const Leaf = ({ attributes, children, leaf }: IProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export default Leaf;
export { Leaf };
