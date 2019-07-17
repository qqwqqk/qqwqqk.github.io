import axios from 'axios';

const timeOut = (time: number = 2 ): number => { return 1000 * time };

export async function requestList(){
  let url: string = 'https://qqwqqk.github.io/ResourceRequest.github.io/qqwqqk/Interface.json'
  return axios({
    method: 'get',
    url: url,
    responseType: 'json',
    timeout: timeOut()
  }).then((res) => { 
    return res.data; 
  })
  .catch((e) => { console.log('request list error : ' + e ); });
}
