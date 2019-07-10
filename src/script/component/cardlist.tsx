import * as React from "react";
import { Row, Col, Card, Icon } from 'antd';
import { Item } from '../store/types';

interface ListInterfaceProps {
  lists: Array<Item>;
  setSelect: (key: number) => void;
}

export const CardList = (props: ListInterfaceProps) => {
  const lists = props.lists;
  const setSelect = props.setSelect;

  if(lists.length === 5){
    let data: Array<Item> = [];
      for(let i = 0; i < lists.length; i++){
        if(i>0){ data.push({ key: -i, rank: 99, name: '', href:'', image: '' }); }
        data.push(lists[i]);
      }

    const cardlist = data.map((item) => {
      if(item.rank === 99){ 
        return( <Col span={1} key={item.key}/> )
      } else {
        return(
          <Col className={'rank-' + Math.abs(item.rank) } span={4} key={item.key}>
            <Card
              bodyStyle={{ padding: 0 }}
              size={item.key === 0 ? 'default':'small'}
              cover={
                <img
                  alt={item.name}
                  src={item.image}
                  onClick={() => setSelect(item.key)}
                />
              }
            >
              {item.name}
            </Card>
          </Col>
        )
      }
    })

    return (
      <Row className='showlist'> {cardlist} </Row>
    )
  } else {
    return <Icon type='loading' style={{fontSize: '40px', margin:'auto'}}/>
  }

}
