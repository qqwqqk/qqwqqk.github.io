import * as React from "react";
import { connect } from "react-redux";

import { MainState } from '../store';
import { requestList } from '../store/axios';
import { ListState } from '../store/types';
import { setItem, addItem } from '../store/actions';

import { Layout, Row, Col, Icon } from 'antd';

import { InfoItem } from './infoitem';
import { CardItem } from './carditem';
import { CardList } from './cardlist';

import '../../style/index.css';

const { Header, Content, Footer } = Layout;

interface MainProps {
  listState: ListState;
  setItem: typeof setItem;
  addItem: typeof addItem;
}

class Main extends React.Component<MainProps>{
  state = { isReady: false };

  constructor(props:any) {
    super(props);
    // console.log("main window loading");
    requestList().then(data=>{
      const lists = data.lists;

      for(let item of lists){
        this.props.addItem(item.title);
      }

      if(lists.length > 0){
        this.props.setItem(lists[0].name);
        this.setState({isReady: true});
      }
    })
  }

  setSelect = (name: string) => { this.props.setItem(name); }

  render(){
    if(this.state.isReady){
      // console.log(this.state.showState);
      return (
        <Layout className="theme">
          <Header style={{ background: 'transparent', margin: '0 12%', minWidth: 720}}>
            { InfoItem(this.props.listState) }
          </Header>
          <Content style={{ background: 'transparent' , margin: '0 20%', minWidth: 600}}>      
            { CardItem(this.props.listState) }
          </Content>
          <Footer style={{ background: 'transparent' , margin: '0 20%', minWidth: 600}}>
            { CardList({ lists: this.props.listState.lists, setSelect: this.setSelect }) }
          </Footer>
        </Layout>
      )
    } else {
      // console.log(this.state.progress);
      return (
        <Layout className="theme">
          <Header style={{ background: 'transparent' , textAlign: 'center'}}></Header>
          <Content style={{ background: 'transparent' , textAlign: 'center' , margin: '0 10%'}}>
            <Row gutter={{xs: 8, sm: 16, md: 24}}>
              <Col span={24}>
                <Icon type='loading' style={{fontSize: '40px', margin:'auto'}}/>
              </Col>
            </Row>
          </Content>
          <Footer style={{ height: window.innerHeight / 10, background: 'transparent' , textAlign: 'center'}}></Footer>
        </Layout>
      )
    }
  }
}

const mapStateToProps = (state: MainState) =>({
  listState: state.listState
})

export default connect(
  mapStateToProps,
  { setItem, addItem }
)(Main);