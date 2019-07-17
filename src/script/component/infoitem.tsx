import * as React from "react";
import { Item, ListState } from '../store/types';
import UserIcon from '../../image/usericon.jpg'; 
import { Row, Col, Avatar, Breadcrumb, Icon } from 'antd';

const getShowItem = (lists: Array<Item>): Item =>{
  for(let item of lists){
    if(item.rank === 0){
      return item;
    }
  }
  return { rank: 0, name: '', href:'#', image: '#' };
}

export const InfoItem = (props: ListState) => {
  const item = getShowItem(props.lists);
  if(item.name !== ''){
    const url: string = "https://github.com/qqwqqk/qqwqqk.github.io";
    const target: string = "_blank";
    return (
      <Row type='flex' align='middle' className='showinfo'>
        <Col span={4} style={{textAlign:"center"}}> <Avatar src={UserIcon} /> </Col>
        <Col span={16} style={{fontSize: '32px'}}>
          <Breadcrumb>
            <Breadcrumb.Item>五月钦铭</Breadcrumb.Item>
            <Breadcrumb.Item>{item.name}</Breadcrumb.Item>
          </Breadcrumb> </Col>
        <Col span={4} style={{textAlign:"center"}}> 
          <Icon type="github" style={{fontSize: '32px'}} onClick={()=>{ window.open(url, target) }}/> 
        </Col>
      </Row>
    )
  } else {
    return <Icon type='loading' style={{fontSize: '40px', margin:'auto'}}/>
  }
}
