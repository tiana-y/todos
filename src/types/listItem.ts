export type ListItem = {
  id: string;
  text: string;
  isDone: boolean;
  children?: ListItem[];
};