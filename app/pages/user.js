/**
 * Created by xudao on 16/12/26.
 */
import React, {PropTypes } from 'react';
import Tloader from 'react-touch-loader';
import LazyLoad from 'react-lazyload';
import Loader from '../component/loader';
require('../assets/less/user.less');

export default class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            canRefreshResolve: 1,
            listLen: 9,
            hasMore: 1,
            initializing: 0
        }
    }

    refresh(resolve, reject) {
        const self = this;
        setTimeout(() => {
            if (!self.state.canRefreshResolve) return reject();

            self.setState({
                listLen: 9,
                hasMore: 1
            });
            resolve();
        }, 2000);
    }

    loadMore(resolve) {
        const self = this;
        setTimeout(() => {
            self.setState({
                hasMore: 0
            });

            resolve();
        }, 2e3);
    }

    render() {
        const placeHolder = <Loader />;

        return (
            <div className="user-container">
                <Tloader className="main" onRefresh={this.refresh.bind(this)} onLoadMore={this.loadMore.bind(this)}
                         hasMore={this.state.hasMore} initializing={this.state.initializing}>
                    <ul className="aui-list aui-media-list">
                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-text">
                                        <div className="aui-list-item-title aui-font-size-18">谁在用苹果手机？赶紧看，央视已报道</div>
                                    </div>
                                    <div className="aui-info aui-padded-b-0">
                                        <div className="aui-info-item aui-font-size-12">
                                            <img src="/assets/img/liulangnan.png" style={{width:"1rem"}}
                                                 className="aui-img-round"/>
                                            <span className="aui-margin-l-5">AUI</span>
                                        </div>
                                        <div className="aui-info-item aui-font-size-12">2015-07-14 10:31</div>
                                    </div>
                                </div>
                                <div className="aui-list-item-media">
                                    <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                        <img src="/assets/img/1.jpeg"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-text">
                                        <div className="aui-list-item-title aui-font-size-18">网吧电脑看到它 你的游戏账号网银就丢了一般了
                                        </div>
                                    </div>
                                    <div className="aui-info aui-padded-b-0">
                                        <div className="aui-info-item aui-font-size-12">
                                            <img src="/assets/img/demo2.png" style={{width:"1rem"}}
                                                 className="aui-img-round"/><span className="aui-margin-l-5">今日头条</span>
                                        </div>
                                        <div className="aui-info-item aui-font-size-12">2015-07-14 10:31</div>
                                    </div>
                                </div>
                                <div className="aui-list-item-media">
                                    <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                        <img src="/assets/img/2.jpeg"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-text">
                                        <div className="aui-list-item-title aui-font-size-18">QQ音乐与酷狗酷我在一起了！三个品牌继续独立发展
                                        </div>
                                    </div>
                                    <div className="aui-info aui-padded-b-0">
                                        <div className="aui-info-item aui-font-size-12">
                                            <img src="/assets/img/demo1.png" style={{width:"1rem"}}
                                                 className="aui-img-round"/>
                                            <span className="aui-margin-l-5">中关村在线</span>
                                            <span className="aui-margin-l-5">26条评论</span>
                                            <span
                                                className="aui-label aui-label-danger aui-label-outlined aui-margin-l-5">热</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="aui-list-item-media">
                                    <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                        <img src="/assets/img/3.jpeg"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>

                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-title aui-font-size-18">小米手机的质量到底有多差？</div>
                                    <div className="aui-list-item-text">
                                        <p className="aui-ellipsis-2">我买了小米手机五台，还有三台小米平板​第一台是跟前女友一起买的小米
                                            2s，用了三年，到现在没出现卡顿，后来给妈妈买了一台红米1s，老妈到现在还在用着，我因为工作需要要用电信联通两张卡</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aui-info">
                                <div className="aui-info-item aui-font-size-12">
                                    <img src="/assets/img/demo1.png" style={{width:"1rem"}} className="aui-img-round"/>
                                    <span className="aui-margin-l-5">中关村在线</span>
                                </div>
                                <div className="aui-info-item aui-font-size-12">26条评论</div>
                            </div>
                        </li>
                        <li className="aui-list-item">
                            <div className="aui-list-item-inner">
                                <div className="aui-list-item-title aui-font-size-18">中国拥有世界顶级航天芯片产品：俄罗斯造不出来了只能求中国分享
                                </div>
                                <p className="aui-ellipsis-2">
                                    如果谈及中国在技术领域的短板，那么大家可能想到的是发动机，其实还有一样：高级电子芯片！人们通常所说的CPU，所谓CPU即中央处理器，就是其代表产品，它可是为电子信息产品的心脏,是集成电路产品的终端级产品。</p>
                                <div className="aui-row aui-row-padded aui-margin-t-5">
                                    <div className="aui-col-xs-4">
                                        <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                            <img src="/assets/img/1.jpeg"/>
                                        </LazyLoad>
                                    </div>
                                    <div className="aui-col-xs-4">
                                        <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                            <img src="/assets/img/2.jpeg"/>
                                        </LazyLoad>
                                    </div>
                                    <div className="aui-col-xs-4">
                                        <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                            <img src="/assets/img/3.jpeg"/>
                                        </LazyLoad>
                                    </div>
                                </div>
                            </div>
                            <div className="aui-info  aui-padded-t-0 aui-padded-r-15">
                                <div className="aui-info-item aui-font-size-12">
                                    <img src="/assets/img/demo1.png" style={{width:"1rem"}} className="aui-img-round"/>
                                    <span className="aui-margin-l-5">中关村在线</span>
                                </div>
                                <div className="aui-info-item aui-font-size-12">26条评论</div>
                            </div>
                        </li>
                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-text">
                                        <div className="aui-list-item-title aui-font-size-18">谁在用苹果手机？赶紧看，央视已报道</div>
                                    </div>
                                    <div className="aui-info aui-padded-b-0">
                                        <div className="aui-info-item aui-font-size-12">
                                            <img src="/assets/img/liulangnan.png" style={{width:"1rem"}}
                                                 className="aui-img-round"/><span className="aui-margin-l-5">AUI</span>
                                        </div>
                                        <div className="aui-info-item aui-font-size-12">2015-07-14 10:31</div>
                                    </div>
                                </div>
                                <div className="aui-list-item-media">
                                    <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                        <img src="/assets/img/1.jpeg"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-text">
                                        <div className="aui-list-item-title aui-font-size-18">网吧电脑看到它 你的游戏账号网银就丢了一般了
                                        </div>
                                    </div>
                                    <div className="aui-info aui-padded-b-0">
                                        <div className="aui-info-item aui-font-size-12">
                                            <img src="/assets/img/demo2.png" style={{width:"1rem"}}
                                                 className="aui-img-round"/><span className="aui-margin-l-5">今日头条</span>
                                        </div>
                                        <div className="aui-info-item aui-font-size-12">2015-07-14 10:31</div>
                                    </div>
                                </div>
                                <div className="aui-list-item-media">
                                    <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                        <img src="/assets/img/2.jpeg"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>
                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-text">
                                        <div className="aui-list-item-title aui-font-size-18">QQ音乐与酷狗酷我在一起了！三个品牌继续独立发展
                                        </div>
                                    </div>
                                    <div className="aui-info aui-padded-b-0">
                                        <div className="aui-info-item aui-font-size-12">
                                            <img src="/assets/img/demo1.png" style={{width:"1rem"}}
                                                 className="aui-img-round"/>
                                            <span className="aui-margin-l-5">中关村在线</span>
                                            <span className="aui-margin-l-5">26条评论</span>
                                            <span
                                                className="aui-label aui-label-danger aui-label-outlined aui-margin-l-5">热</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="aui-list-item-media">
                                    <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                        <img src="/assets/img/3.jpeg"/>
                                    </LazyLoad>
                                </div>
                            </div>
                        </li>

                        <li className="aui-list-item">
                            <div className="aui-media-list-item-inner">
                                <div className="aui-list-item-inner">
                                    <div className="aui-list-item-title aui-font-size-18">小米手机的质量到底有多差？</div>
                                    <div className="aui-list-item-text">
                                        <p className="aui-ellipsis-2">我买了小米手机五台，还有三台小米平板​第一台是跟前女友一起买的小米
                                            2s，用了三年，到现在没出现卡顿，后来给妈妈买了一台红米1s，老妈到现在还在用着，我因为工作需要要用电信联通两张卡</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aui-info">
                                <div className="aui-info-item aui-font-size-12">
                                    <img src="/assets/img/demo1.png" style={{width:"1rem"}} className="aui-img-round"/>
                                    <span className="aui-margin-l-5">中关村在线</span>
                                </div>
                                <div className="aui-info-item aui-font-size-12">26条评论</div>
                            </div>
                        </li>
                        <li className="aui-list-item">
                            <div className="aui-list-item-inner">
                                <div className="aui-list-item-title aui-font-size-18">中国拥有世界顶级航天芯片产品：俄罗斯造不出来了只能求中国分享
                                </div>
                                <p className="aui-ellipsis-2">
                                    如果谈及中国在技术领域的短板，那么大家可能想到的是发动机，其实还有一样：高级电子芯片！人们通常所说的CPU，所谓CPU即中央处理器，就是其代表产品，它可是为电子信息产品的心脏,是集成电路产品的终端级产品。</p>
                                <div className="aui-row aui-row-padded aui-margin-t-5">
                                    <div className="aui-col-xs-4">
                                        <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                            <img src="/assets/img/1.jpeg"/>
                                        </LazyLoad>
                                    </div>
                                    <div className="aui-col-xs-4">
                                        <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                            <img src="/assets/img/2.jpeg"/>
                                        </LazyLoad>
                                    </div>
                                    <div className="aui-col-xs-4">
                                        <LazyLoad placeholder={placeHolder} overflow height={'100%'}>
                                            <img src="/assets/img/3.jpeg"/>
                                        </LazyLoad>
                                    </div>
                                </div>
                            </div>
                            <div className="aui-info  aui-padded-t-0 aui-padded-r-15">
                                <div className="aui-info-item aui-font-size-12">
                                    <img src="/assets/img/demo1.png" style={{width:"1rem"}} className="aui-img-round"/>
                                    <span className="aui-margin-l-5">中关村在线</span>
                                </div>
                                <div className="aui-info-item aui-font-size-12">26条评论</div>
                            </div>
                        </li>
                    </ul>
                </Tloader>
            </div>
        )
    }

    translateTo() {
        //this.props.history.pushState({modal: true}, '/about/2');
        this.context.router.push('/about/2')
    }
}
