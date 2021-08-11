import { Node } from 'slate';

export interface PayloadTitle {
  title: string | null;
}

export interface PayloadContent {
  content: Node[];
}

export interface PayloadCount {
  count: number | null;
}

export interface PayloadTags {
  tags: number[] | [];
}

export interface PayloadUrl {
  url: string | null;
}

export interface PayloadImage {
  image: object | null;
}

export interface PayloadIsOpen {
  isOpen: boolean;
}

export interface PayloadCategory {
  category: string;
}
