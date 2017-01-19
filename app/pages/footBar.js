/**
 * Created by xudao on 16/12/26.
 */
import React, {PropTypes } from 'react';
import {Link } from 'react-router'
require('../assets/less/footBar.less');

export default class FootBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="body-container">
                <header className="aui-bar aui-bar-nav aui-bar-warning">
                    <a className="aui-btn aui-btn-warning aui-pull-left" onClick={this.backHistory.bind(this)}>
                        <span className="aui-iconfont aui-icon-left"></span>
                    </a>
                    <div className="aui-title" id="header-title">首页</div>
                </header>
                <div className="content-container">
                    {this.props.children}
                </div>
                <footer className="aui-bar aui-bar-tab" id="footer">
                    <Link className="aui-bar-tab-item " to={{ pathname: '/footer/file'}}
                          activeClassName='aui-active'>
                        <i className="aui-iconfont aui-icon-home"></i>
                        <div className="aui-bar-tab-label">首页</div>
                    </Link>
                    <Link className="aui-bar-tab-item" to="/footer/user" activeClassName='aui-active'>
                        <i className="aui-iconfont aui-icon-star"></i>
                        <div className="aui-bar-tab-label">收藏</div>
                    </Link>
                </footer>
            </div>
        )
    }

    translateTo() {
        this.context.router.push('/about/2');
    }

    backHistory() {
        this.context.router.goBack();
    }
}

FootBar.contextTypes = {
    router: React.PropTypes.object
};
