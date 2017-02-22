/**
 * Created by xudao on 16/12/26.
 */
import React, {PropTypes } from 'react';
import {connect } from 'react-redux'
import {bindActionCreators } from 'redux'
import * as CounterActions from '../actions/counter';
import ReactSwiper from 'react-swiper-dy';
import '../assets/less/about.less';

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.params.id);

        this.onSlideChangeStart = this.onSlideChangeStart.bind(this);
    }

    onSlideChangeStart(swiper){
        console.log(swiper.activeIndex);
        swiper.startAutoplay();
    }

    render() {
        const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        return (
            <div className="container">
                <ReactSwiper ref="reactSwiper" className="single-swiper" swipeOptions={{pagination : '.swiper-pagination',autoplay : 5000, loop : false, lazyLoading : true, onSlideChangeStart: this.onSlideChangeStart}}>
                    <div className="page">
                        <a href="#1">
                            <img data-src="http://liu-dongyu.github.io/react-swiper/largeNature1.jpg" className="swiper-lazy"/>
                            <div className="swiper-lazy-preloader"></div>
                        </a>
                    </div>
                    <div className="page">
                        <a href="#2">
                            <img data-src="http://liu-dongyu.github.io/react-swiper/largeNature2.jpg" className="swiper-lazy"/>
                            <div className="swiper-lazy-preloader"></div>
                        </a>
                    </div>
                    <div className="page">
                        <a href="#3">
                            <img data-src="http://liu-dongyu.github.io/react-swiper/largeNature3.jpg" className="swiper-lazy"/>
                            <div className="swiper-lazy-preloader"></div>
                        </a>
                    </div>
                </ReactSwiper>
                测试redux
                Clicked: {counter} times
                {' '}
                <button onTouchTap={increment}>+</button>
                {' '}
                <button onTouchTap={decrement}>-</button>
                {' '}
                <button onTouchTap={incrementIfOdd}>Increment if odd</button>
                {' '}
                <button onTouchTap={() => incrementAsync()}>Increment async</button>
                <button onTouchTap={this.translateTo.bind(this)}>跳转</button>
            </div>

        )
    }

    translateTo() {
        //this.props.history.pushState({modal: true}, '/about/2');
        this.context.router.push('/footer')
    }
}

//将state.counter绑定到props的counter
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}
//将action的所有方法绑定到props上
function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch)
}

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(mapStateToProps, mapDispatchToProps)(About)

About.contextTypes = {
    router: React.PropTypes.object
};

About.propTypes = {
    //increment必须为fucntion,且必须存在
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    //counter必须为数字，且必须存在
    counter: PropTypes.number.isRequired
};
