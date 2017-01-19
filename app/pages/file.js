/**
 * Created by xudao on 16/12/26.
 */
import React, {PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import * as IndexActions from '../actions/file';
import Tloader from 'react-touch-loader';

require('../assets/less/file.less');

class File extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasMore: 1,
            initializing: 0
        };
    }

    componentDidMount() {
        const { fileState, fileActions } = this.props;

        if (fileState.pageNum !== 10) {
            fileActions.initData();
        }

        if(fileState.scrollTop){
            this.refs.refreshContainer.childNodes[0].scrollTop = fileState.scrollTop;
        }

        this.setAsyncRouteLeaveHook(this.context.router, this.props.route, this.routerWillLeave.bind(this));
    }

    refresh(resolve, reject) {
        const { fileActions } = this.props;

        fileActions.refresh(function () {
            resolve();
        })
    }

    loadMore(resolve) {
        const { fileActions } = this.props;

        fileActions.loadMore(function () {
            resolve();
        }.bind(this))
    }

    setAsyncRouteLeaveHook(router, route, hook) {
        router.setRouteLeaveHook(route, nextLocation => {
            hook(nextLocation);
        })
    }

    routerWillLeave(nextLocation) {
        const scrollTop = this.refs.refreshContainer.childNodes[0].scrollTop;
        const { fileActions } = this.props;

        fileActions.saveScroll(scrollTop);
    }

    render() {
        const { hasMore, list } = this.props.fileState;
        const { initializing } = this.state;

        return (
            <div className="refresh-content" ref="refreshContainer">
                <Tloader className="main" onRefresh={this.refresh.bind(this)} onLoadMore={this.loadMore.bind(this)}
                         hasMore={hasMore} initializing={initializing}>
                    <div>
                        {
                            (list ? list : []).map(function (item, i) {
                                return (
                                    <div className="aui-card-list" key={'card'+i}>
                                        <div className="aui-card-list-header">
                                            卡片布局头部区域 {item}
                                        </div>
                                        <div className="aui-card-list-content-padded">
                                            内容区域，卡片列表布局样式可以实现APP中常见的各类样式
                                        </div>
                                        <div className="aui-card-list-footer">
                                            底部区域
                                        </div>
                                    </div>
                                )
                            }.bind(this))
                        }
                    </div>
                </Tloader>
            </div>
        )
    }

    translateTo() {
        this.context.router.push('/about/2');
    }
}

function mapStateToProps(state) {
    return {
        fileState: state.fileState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fileActions: bindActionCreators(IndexActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(File);

File.contextTypes = {
    router: React.PropTypes.object
};
