import { Item } from "./item.model";

export interface UserList {
  id: number;
  name: string;
  items: Item[];
}
