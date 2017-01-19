/**
 * Created by xudao on 16/12/26.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router';
import { Provider} from 'react-redux'
import configureStore from './stores/configureStore';
import routers from './pages/router';
import injectTapEventPlugin from "react-tap-event-plugin";
require('./assets/less/translate.less');
injectTapEventPlugin();

const store = configureStore();

ReactDom.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            {routers}
        </Router>
    </Provider>
), document.getElementById('app'));
