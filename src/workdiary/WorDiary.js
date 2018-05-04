import React, { Component } from 'react';
import {
    Icon,
} from 'react-weui';
import PageTitle from '../PageTitle';
import NoteList from './NoteList';
import './workDiary.less';
import './../icon/iconfont';

class WorkDiary extends Component {
    render() {
        return (
            <div>
                <PageTitle title='工作日志'/>
                <div className='pageTop'>
                    <div className='iconBox'>
                        <div className='iconWrap'>
                            <svg className="icon icon-bianji">
                                <use xlinkHref="#icon-bianji">新建</use>
                            </svg>
                        </div>
                        <h5>新建日志</h5>
                    </div>
                    <div className='iconBox'>
                        <div className='iconWrap'>
                            <svg className="icon icon-wenzhang">
                                <use xlinkHref="#icon-wenzhang">文章</use>
                            </svg>
                        </div>
                        <h5>草稿</h5>
                    </div>
                </div>
                <NoteList/>
            </div>
        );
    }
}

export default WorkDiary;
