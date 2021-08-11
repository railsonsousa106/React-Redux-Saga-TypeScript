export interface IAuthor {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string;
    social: ISocial;
    description: string;
    blogs: IBlog[];
    createdAt: Date;
    updatedAt: Date;
    status: number;
  }
  
  export interface ISocial {
    email: string;
    facebook: string;
    linkedin: string;
    twitter: string;
  }
  
  export interface IBlog {
    id: number;
    title: string;
    description: string;
    picture: string;
    author: IAuthor;
    views: number;
    likes: number;
    reposts: number;
    readMinutes: number;
    lastReadAt: Date;
    createdAt: Date;
    updatedAt: Date;
    status: number;
    tags: ITag[];
    comments: IComment[];
  }
  
  export interface ITag {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface IComment {
    author: IAuthor;
    blog: IBlog;
    description: string;
    createdAt: Date;
    status: number;
  }
  
  export interface IInvite {
    author: IAuthor,
    invitedBy: string,
    status: number,
    createdAt: Date
  }
  
  export interface IColumn {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right' | 'left' | 'center';
  }
  