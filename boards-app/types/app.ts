export type Platform = 'na' | 'eu';

export type Category = {
  id: string,
  name: string,
  shortname: string,
  locale: string,
};

export type Categories = Category[];

export type Application = {
  id: string,
  shortName: string,
  name: string,
  locale: string,
};

export type User = {
  banEndsAt: string | null,
  id: number,
  isModerator: boolean,
  isRioter: boolean,
  name: string,
  profileIcon: number,
  realm: string,
  summonerLevel: number,
};

export type Comment = {
  id: string,
  dates: {
    createdAt: string,
    modifiedAt: string,
  },
  downvotes: number,
  upvotes: number,
  parentcommentid: string | null,
  user: User,
  message: string,
};

export type Comments = Comment[];

export type Discussion = {
  application: Application,
  content: {
    body: string,
  },
  contenttype: 'string',
  dates: {
    createdAt: string,
    modifiedAt: string,
    lastCommentedAt: string,
  },
  downvotes: number,
  hasriotercomments: boolean,
  id: string,
  isglobalsticky: boolean,
  issticky: boolean,
  softcomments: number,
  title: string,
  totalcomments: number,
  upvotes: number,
  user: User,
  viewcount: number,
};

export type Discussions = Discussion[];
