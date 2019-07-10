import { ShowState } from './types';
import { itemInit, listReducer, showReducer } from './reducers';

/*
test('item init test', ()=>{
  const name = 'test';
  const output = { 
    rank: 0, name: 'test', href: '#',
    image: 'https://qqwqqk.github.io/ResourceRequest.github.io/resource/IMG/qqwqqk/show/test_show.jpg' 
  };
  expect(itemInit(name)).toEqual(output);
});

test('set item of list test', ()=>{
  const state = { lists:[
    { rank: 0, name: '', href:'', image: '' },
    { rank: 0, name: '', href:'', image: '' },
    { rank: 0, name: '', href:'', image: '' },
    { rank: 0, name: '', href:'', image: '' },
    { rank: 0, name: '', href:'', image: '' },
    { rank: 0, name: '', href:'', image: '' },
    { rank: 0, name: '', href:'', image: '' }
  ]};
  const output = { lists:[
    { rank: 3, name: '', href:'', image: '' },
    { rank: -3, name: '', href:'', image: '' },
    { rank: -2, name: '', href:'', image: '' },
    { rank: -1, name: '', href:'', image: '' },
    { rank: 0, name: '', href:'', image: '' },
    { rank: 1, name: '', href:'', image: '' },
    { rank: 2, name: '', href:'', image: '' }
  ]};
  expect(listReducer(state ,{ type: 'SET_ITEM' , key: 4 })).toEqual(output);
});

test('set show type test', ()=>{
  const state: ShowState = { type: 'GET_ITEM' };
  const output = { type: 'GET_LIST' };
  expect(showReducer(state ,{ type: 'GET_LIST' })).toEqual(output);
});
*/
