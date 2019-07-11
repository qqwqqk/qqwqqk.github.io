import { Item, ListState, SET_ITEM, ListActionType, ShowState, ShowActionType, GET_LIST, GET_ITEM} from "./types";

export const itemInit = (name: string) => {
  return {
    name: name, rank: 0,
    href: '#',
    image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/'+ name +'.jpg'
  }
}

const initialState: ListState = {
  lists: [
    itemInit('Alchemy'), itemInit('Fate'),  itemInit('Glory'),  itemInit('Vocaloid'),
    itemInit('Walk')
  ]
};

const showState: ShowState = {
  type: 'GET_LIST'
};

export function listReducer(
  state = initialState,
  action: ListActionType
): ListState{
  switch(action.type){
    case SET_ITEM:
      let list = state.lists;
      for(let index = 0; index < list.length; index++){
        if(index === action.key){
          list[index].rank = 0;
        } else {
          if(index > action.key){
            list[index].rank = action.key + state.lists.length - index < index - action.key ?  index - action.key - state.lists.length : index - action.key;
          } else {
            list[index].rank = action.key - index < index + state.lists.length - action.key ?  index - action.key : index + state.lists.length - action.key;
          }
        }
      }
      return {lists: list};
    default:
      return state;
  }
}

export function showReducer(
  state = showState,
  action: ShowActionType
): ShowState {
  switch(action.type){
    case 'GET_ITEM':
      return {type: 'GET_ITEM'};
    case 'GET_LIST':
      return {type: 'GET_LIST'};
    default:
      return state;
  }
}

export const getShowList = (): ListState => {
  const state = initialState;
  const action = showState;
  switch(action.type){
    case GET_ITEM:
      let current:Array<Item> = [];
      for(let val of state.lists){ if(val.rank === 0){ current.push(val); } }
      // console.log(current);
      return { lists: current };
    case GET_LIST:
      let select:Array<Item> = [];
      for(let val of state.lists){ if(Math.abs(val.rank) < 3){ select.push(val); } }
      let sort = select.sort((a,b)=>(a.rank - b.rank));
      // console.log(sort);
      return { lists: sort };
    default:
      let cache:Array<Item> = [];
      for(let val of state.lists){ if(cache.length < 5){ cache.push(val); } }
      // console.log(cache);
      return { lists: sort };
  }
}
