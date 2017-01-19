/**
 * Created by xudao on 16/12/26.
 */
import React, {PropTypes } from 'react';
import {connect} from 'react-redux'
import {bindActionCreators } from 'redux'
import * as IndexActions from '../actions/index';
import * as CounterActions from '../actions/counter';

require('../assets/less/index.less');

class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillUpdate(props){

    }

    componentWillMount(){
        const { initData } = this.props;

        this.props.mainState.list ? null : this.props.indexActions.initData();
    }

    render() {
        const {mainState} = this.props;
        return (
            <div className="container">
                <div className="refresh-container" onClick={this.props.indexActions.refresh}>点击刷新...</div>
                {
                    (mainState.list && mainState.list.length ? mainState.list : []).map(function (item,index) {
                        return (
                            <div className="block" key={'div'+index} onClick={this.translateTo.bind(this)}>{item}</div>)
                    }.bind(this))
                }
                <div className="refresh-container" onTouchTap={this.loadMoreFromAction.bind(this)}>点击加载更多...</div>
            </div>
        )
    }

    translateTo() {
        this.context.router.push('footer');
    }

    loadMoreFromAction(){
        this.props.mainState && this.props.mainState.hasMore ? this.props.indexActions.loadMore(function(){this.props.counterActions.increment()}.bind(this)) : null;

    }
}

function mapStateToProps(state) {
    return {
        mainState: state.mainState
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return{
        indexActions : bindActionCreators(IndexActions,dispatch),
        counterActions : bindActionCreators(CounterActions,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)

Index.propTypes = {

};

Index.contextTypes = {
    router: React.PropTypes.object
};

