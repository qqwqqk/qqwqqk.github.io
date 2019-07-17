import { ListState, SET_ITEM, ADD_ITEM, ListActionType } from "./types";

export const itemInit = (name: string) => {
  return {
    name: name, rank: 0,
    href: '#',
    image: 'https://qqwqqk.github.io/ResourceRequest.github.io/qqwqqk/show/'+ name +'.jpg'
  }
}

const initialState: ListState = {
  lists: [ ]
};

export function listReducer(
  state = initialState,
  action: ListActionType
): ListState{
  switch(action.type){
    case SET_ITEM:
      const lists = state.lists;
      let currindex = 0;
      for(let index = 0; index < lists.length; index++){
        if(lists[index].name === action.name){ currindex = index;}
      }
      for(let index = 0; index < lists.length; index++){
        if(index === currindex){
          lists[index].rank = 0;
        } else {
          if(index > currindex){
            lists[index].rank = currindex + state.lists.length - index < index - currindex ?  index - currindex - state.lists.length : index - currindex;
          } else {
            lists[index].rank = currindex - index < index + state.lists.length - currindex ?  index - currindex : index + state.lists.length - currindex;
          }
        }
      }
      // console.log(lists);
      return {lists: lists};
    case ADD_ITEM:
        for(let item of state.lists){
          if(item.name === action.name ){return state;}
        }
        const addlists = [...state.lists, itemInit(action.name)];
        // console.log(addlists);
        return {lists: addlists};
    default:
      return state;
  }
}
