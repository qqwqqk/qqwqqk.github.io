import * as React from "react";
import { Row, Col, Card, Icon } from 'antd';
import { Item, ListState } from '../store/types';

const getShowItem = (lists: Array<Item>): Item =>{
  for(let item of lists){
    if(item.rank === 0){
      return item;
    }
  }
  return { rank: 0, name: '', href:'#', image: '#' };
}

export const CardItem = (props: ListState) => {
  const item = getShowItem(props.lists);
  if(item.name !== ''){
    return (
      <Row className='showitem'>
        <Col span={2}/>
        <Col span={20}>
          <Card
            bodyStyle={{height:0, border:0, padding:0}}
            cover={
              <img
                alt={item.name}
                src={item.image}
              />
            }
          />
        </Col>
        <Col span={2}/>
      </Row>
    )
  } else {
    return <Icon type='loading' style={{fontSize: '40px', margin:'auto'}}/>
  }
}
