import { requestList } from './axios'

test('request list', async ()=>{
  expect.hasAssertions();
  return requestList().then(data => {
    console.log(data);
    expect(data).toBeTruthy();
  });
});