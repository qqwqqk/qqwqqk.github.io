import { itemInit, listReducer } from './reducers';

test('item init test', ()=>{
  const name = 'test';
  const output = { 
    rank: 0, name: 'test', href: '#',
    image: 'https://qqwqqk.github.io/ResourceRequest.github.io/qqwqqk/show/test.jpg' 
  };
  expect(itemInit(name)).toEqual(output);
});

describe('itemlist reducers test', ()=>{
  it('set item of list test', ()=>{
    const state = { lists:[
      { rank: 0, name: 'a', href:'', image: '' },
      { rank: 0, name: 'b', href:'', image: '' },
      { rank: 0, name: 'c', href:'', image: '' },
      { rank: 0, name: 'd', href:'', image: '' },
      { rank: 0, name: 'e', href:'', image: '' },
      { rank: 0, name: 'f', href:'', image: '' },
      { rank: 0, name: 'g', href:'', image: '' }
    ]};
    const output = { lists:[
      { rank: 3, name: 'a', href:'', image: '' },
      { rank: -3, name: 'b', href:'', image: '' },
      { rank: -2, name: 'c', href:'', image: '' },
      { rank: -1, name: 'd', href:'', image: '' },
      { rank: 0, name: 'e', href:'', image: '' },
      { rank: 1, name: 'f', href:'', image: '' },
      { rank: 2, name: 'g', href:'', image: '' }
    ]};
    expect(listReducer(state ,{ type: 'SET_ITEM' , name: 'e' })).toEqual(output);
  })

  it('add item of list test', ()=>{
    const state = { lists:[
      { rank: 0, name: 'a', href:'', image: '' },
      { rank: 0, name: 'b', href:'', image: '' },
      { rank: 0, name: 'c', href:'', image: '' },
      { rank: 0, name: 'd', href:'', image: '' },
      { rank: 0, name: 'e', href:'', image: '' },
      { rank: 0, name: 'f', href:'', image: '' },
      { rank: 0, name: 'g', href:'', image: '' }
    ]};
    const output = { lists:[
      { rank: 0, name: 'a', href:'', image: '' },
      { rank: 0, name: 'b', href:'', image: '' },
      { rank: 0, name: 'c', href:'', image: '' },
      { rank: 0, name: 'd', href:'', image: '' },
      { rank: 0, name: 'e', href:'', image: '' },
      { rank: 0, name: 'f', href:'', image: '' },
      { rank: 0, name: 'g', href:'', image: '' },
      { rank: 0, name: 'h', href:'#', image: 'https://qqwqqk.github.io/ResourceRequest.github.io/qqwqqk/show/h.jpg' }
    ]};
    expect(listReducer(state ,{ type: 'ADD_ITEM' , name: 'h' })).toEqual(output);
  })
});

