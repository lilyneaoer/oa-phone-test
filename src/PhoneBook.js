import React, { Component } from 'react';
import {
    Panel,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    PanelHeader,
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
} from 'react-weui';
const smallIcon = <img src='http://img.hb.aicdn.com/999e304358a8cc1ac0cc65d6841ee8e2cf9e2eba17feb-jCrLwp_fw658' style={{width:'32px',height:'32px',marginRight:'5px'}}/>;

class PhoneBook extends Component {
    render() {
        return (
            <Panel>
                <PanelHeader className='phoneTitle'>
                    A
                </PanelHeader>
                <PanelBody>
                    <MediaBox type="small_appmsg">
                        <Cells>
                            <Cell href="tel:18688888888" access>
                                <CellHeader>{smallIcon}</CellHeader>
                                <CellBody>
                                    <p>Andy</p>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell href="tel:18688888888" access>
                                <CellHeader>{smallIcon}</CellHeader>
                                <CellBody>
                                    <p>Ant</p>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                        </Cells>
                    </MediaBox>
                </PanelBody>
                <PanelHeader className='phoneTitle'>
                    J
                </PanelHeader>
                <PanelBody>
                    <MediaBox type="small_appmsg">
                        <Cells>
                            <Cell href="tel:18688888888" access>
                                <CellHeader>{smallIcon}</CellHeader>
                                <CellBody>
                                    <p>Jike</p>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                            <Cell href="tel:18688888888" access>
                                <CellHeader>{smallIcon}</CellHeader>
                                <CellBody>
                                    <p>Jim</p>
                                </CellBody>
                                <CellFooter/>
                            </Cell>
                        </Cells>
                    </MediaBox>
                </PanelBody>
            </Panel>
        );
    }
}

export default PhoneBook;
