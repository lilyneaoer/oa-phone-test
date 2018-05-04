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
} from 'react-weui';
const appMsgIcon = <img src='http://img.hb.aicdn.com/999e304358a8cc1ac0cc65d6841ee8e2cf9e2eba17feb-jCrLwp_fw658'/>;

class MyInfo extends Component {
    render() {
        return (
            <Panel>
                <PanelBody>
                    <MediaBox type="appmsg" href="javascript:void(0);">
                        <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                        <MediaBoxBody>
                            <MediaBoxTitle>张三</MediaBoxTitle>
                            <MediaBoxDescription>
                                云南犀鸟科技
                            </MediaBoxDescription>
                        </MediaBoxBody>
                    </MediaBox>
                </PanelBody>
            </Panel>
        );
    }
}

export default MyInfo;
