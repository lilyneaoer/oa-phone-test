import React, { Component } from 'react';
import {
    Cells,
    Cell,
    CellBody,
    CellFooter,
} from 'react-weui';
import './workDiary.less';
import './../icon/iconfont';

class NoteList extends Component {
    handleTitleClick () {
        console.log('click');
    }
    render() {
        return (
            <Cells className='noteList'>
                <Cell access onClick={this.handleTitleClick}>
                    <CellBody>
                        某某项目工作日报_张三
                    </CellBody>
                    <CellFooter>
                        05-04
                    </CellFooter>
                </Cell>
                <Cell access>
                    <CellBody>
                        Title
                    </CellBody>
                    <CellFooter>
                        Description
                        <svg className="icon icon-icon">
                            <use xlinkHref="#icon-icon">选项</use>
                        </svg>
                    </CellFooter>
                </Cell>
            </Cells>
        );
    }
}

export default NoteList;
