import { Item, ListState, SET_ITEM, ListActionType, ShowState, ShowActionType, GET_LIST, GET_ITEM} from "./types";

const initialState: ListState = {
  lists: [
    {
      key : 0, rank: 0, name: 'Alchemy', href: '#',
      image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/Alchemy_show.jpg'
    },
    {
      key : 1, rank: 1, name: 'Fate', href: '#',
      image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/Fate_show.jpg'
    },
    {
      key : 2, rank: 2, name: 'Glory', href: '#',
      image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/Glory_show.jpg'
    },
    {
      key : 3, rank: 3, name: 'Vocaloid', href: '#',
      image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/Vocaloid_show.jpg'
    },
    {
      key : 4, rank: -3, name: 'Walk', href: '#',
      image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/Walk_show.jpg'
    },
    {
      key : 5, rank: -2, name: 'Vocaloid', href: '#',
      image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/Vocaloid_show.jpg'
    },
    {
      key : 6, rank: -1, name: 'Walk', href: '#',
      image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/Walk_show.jpg'
    }
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
      let temp = state.lists.map(val=>{
        if(val.key === action.key){
          val.rank = 0;
        } else {
          if(val.key > action.key){
            val.rank = action.key + state.lists.length - val.key < val.key - action.key ?  val.key - action.key - state.lists.length : val.key - action.key;
          } else {
            val.rank = action.key - val.key < val.key + state.lists.length - action.key ?  val.key - action.key :  val.key + state.lists.length - action.key;
          }
        }
        return val;
      })
      // console.log(temp);
      return {
        lists: temp
      }
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

export const getShowList = ( ): ListState => {
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
