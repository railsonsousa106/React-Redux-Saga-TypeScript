import { Messenger, Service, UI, User } from '../redux/digitalEmployee/types';

export interface IRootState {
  authModalData: {
    authModalStatus: string;
  };
  authData: {
    isLogged: boolean;
    isFetchingLoggedStatus: boolean;
    signInError: string | null;
    signUpError: string | null;
  };
}

export interface IRootState {
  postBlogData: {
    currentCategory: string;
    title: string;
    content: string;
    image: object;
    tags: number[];
    countsOfWords: number;
    isModalPostOpen: boolean;
    isModalAfterPost: boolean;
  };
}

export interface IRootState {
  designPageData: {
    urlLamp: string;
    urlLemon: string;
    urlDesignBook: string;
    urlComputer: string;
    urlAvatar: string;
    urlCommentsAvatar: string;
  };
}

export interface IRootState {
  homeBlogsData: {
    blogs: any[];
    tags: any[];
    topAuthors: any[];
    featureStories: any[];
  };
}

export interface IRootState {
  yourStoriesData: {
    stories: any[];
  };
}

export interface IRootState {
  digitalEmployeeData: {
    currentStep: string;
    projectID: number | null;
    user: User;
    service: Service;
    messenger: Messenger;
    ui: UI;
  };
}

export interface IComment {
  author: {
    name: string;
    surname: string;
    avatar: string;
  };
  createdTime: string;
  description: string;
}

export interface IStory {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  tags: string[];
  readTime: string;
  postedTime: string;
  author: {
    name: string;
    surname: string;
    date: string;
    avatar: string;
  };
  likes: number;
  comments: IComment[];
  views: number;
  reposts: number;
}

export interface tt {
  designPageData: {
    urlLamp: string;
  };
}
