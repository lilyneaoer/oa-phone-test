import React, { Component } from 'react';
import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarLabel,
    Article
} from 'react-weui';
import PageTitle from './PageTitle';
import WorkList from './WorkList';
import MsgList from './MsgList';
import PhoneBook from './PhoneBook';
import MyInfo from './MyInfo';
import MyWork from './MyWork';

import IconMsg from './icon/msg.png';
import IconMe from './icon/me.png';
import IconWork from './icon/works.png';
import IconOrgs from './icon/orgs.png';
import WorkDiary from "./workdiary/WorDiary";
import './icon/iconfont';

class Wrap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        };
    }
  render() {
    return (
     <div className='Wrap'>
         <Tab>
             <TabBody>
                 <div style={{display: this.state.tab == 0 ? null : 'none'}}>
                     <PageTitle title='消息'/>
                     <MsgList/>
                     {/*<WorkDiary/>*/}
                 </div>
                 <div style={{display: this.state.tab == 1 ? null : 'none'}}>
                     <PageTitle title='通讯录'/>
                     <PhoneBook/>
                 </div>
                 <div style={{display: this.state.tab == 2 ? null : 'none'}}>
                     <PageTitle title='工作台'/>
                     <WorkList/>
                 </div>
                 <div style={{display: this.state.tab == 3 ? null : 'none'}}>
                     <PageTitle title='我'/>
                     <MyInfo/>
                     <MyWork/>
                 </div>
             </TabBody>
            <TabBar>
                <TabBarItem active={this.state.tab == 0}  onClick={e=>this.setState({tab:0})}>
                    <svg className="icon icon-xiaoxi">
                        <use xlinkHref="#icon-xiaoxi">消息</use>
                    </svg>
                    <TabBarLabel>消息</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab == 1} onClick={e=>this.setState({tab:1})}>
                    <svg className="icon icon-zuzhijiagou">
                        <use xlinkHref="#icon-zuzhijiagou">通讯录</use>
                    </svg>
                    <TabBarLabel>通讯录</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab == 2}  onClick={e=>this.setState({tab:2})}>
                    <svg className="icon icon-gongzuoon">
                        <use xlinkHref="#icon-gongzuoon">工作台</use>
                    </svg>
                    <TabBarLabel>工作台</TabBarLabel>
                </TabBarItem>
                <TabBarItem active={this.state.tab == 3}  onClick={e=>this.setState({tab:3})}>
                    <svg className="icon icon-wo">
                        <use xlinkHref="#icon-wo">我</use>
                    </svg>
                    <TabBarLabel>我</TabBarLabel>
                </TabBarItem>
            </TabBar>
         </Tab>
     </div>
    );
  }
}

export default Wrap;
