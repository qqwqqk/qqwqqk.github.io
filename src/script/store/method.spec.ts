import { toTimestamp, isEmpty, flatten } from './method';

test('date to timestamp',()=>{
  let str = "2019-06-14T01:31:23.000+0000";
  expect(toTimestamp(str)).toBe(1560475883000);
})

test('object is empty',()=>{
  let obj = {};
  expect(isEmpty(obj)).toBe(true);
})

test('flattening the array',()=>{
  let arr = [1, [2, 3, [4]]];
  let res = [1,2,3,4];
  expect(flatten(arr)).toEqual(res);
})