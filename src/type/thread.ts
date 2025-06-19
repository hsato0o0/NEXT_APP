export type Threads = {
  user: {
    name: string;
    id: string;
    email: string;
    password: string;
    createdAt: Date;
  };
  comments: {
    name: string;
    id: string;
    createdAt: Date;
    comment: string;
    threadId: string;
  }[];
  title: string;
  name: string;
  id: string;
  createdAt: Date;
  userId: string;
  content: string;
  updatedAt: Date;
}[];
