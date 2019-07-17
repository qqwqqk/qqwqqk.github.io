export const SET_ITEM = "SET_ITEM";
export const ADD_ITEM = "ADD_ITEM";

export interface SetItem{
  type: typeof SET_ITEM;
  name: string;
}

export interface AddItem{
  type: typeof ADD_ITEM;
  name: string;
}

export interface Item{
  name: string;
  rank: number;
  href: string;
  image: string;
}

export interface ListState{
  lists: Item[];
}

export type ListActionType = SetItem | AddItem;