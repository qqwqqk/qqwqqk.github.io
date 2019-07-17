import { SetItem, AddItem, SET_ITEM, ADD_ITEM } from "./types";

export function setItem(name: string): SetItem{
  return {
    type: SET_ITEM,
    name: name
  }
}

export function addItem(name: string): AddItem{
  return {
    type: ADD_ITEM,
    name: name
  }
}
