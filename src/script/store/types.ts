export const SET_ITEM = "SET_ITEM";
export const GET_ITEM = "GET_ITEM";
export const GET_LIST = "GET_LIST";

export interface SetItem{
  type: typeof SET_ITEM;
  key: number;
}

export interface GetItem{
  type: typeof GET_ITEM;
}

export interface GetList{
  type: typeof GET_LIST;
}

export interface Item{
  rank: number;
  name: string;
  href: string;
  image: string;
}

export interface ListState{
  lists: Item[];
}

export interface ShowState{
  type: typeof GET_ITEM | typeof GET_LIST ;
}

export type ListActionType = SetItem;
export type ShowActionType = GetItem | GetList;