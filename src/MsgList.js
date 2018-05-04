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

class MsgList extends Component {
  render() {
    return (
        <Panel>
            <PanelBody>
                <MediaBox type="appmsg" href="javascript:void(0);">
                    <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>Tom</MediaBoxTitle>
                        <MediaBoxDescription>
                            Cras sit amet nibh libero, in gravida nulla.
                        </MediaBoxDescription>
                    </MediaBoxBody>
                </MediaBox>
                <MediaBox type="appmsg" href="javascript:void(0);">
                    <MediaBoxHeader>{appMsgIcon}</MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>Jerry</MediaBoxTitle>
                        <MediaBoxDescription>
                           Nulla vel metus scelerisque ante sollicitudin commodo.
                        </MediaBoxDescription>
                    </MediaBoxBody>
                </MediaBox>
            </PanelBody>

        </Panel>
    );
  }
}

export default MsgList;
