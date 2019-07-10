import { SetItem, GetList, GetItem, SET_ITEM, GET_ITEM, GET_LIST } from "./types";

export function setItem(key: number): SetItem{
  return {
    type: SET_ITEM,
    key: key
  }
}

export function getItem(): GetItem{
  return {
    type: GET_ITEM
  }
}

export function getList(): GetList{
  return {
    type: GET_LIST
  }
}
