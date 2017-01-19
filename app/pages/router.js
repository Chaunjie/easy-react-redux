/**
 * Created by xudao on 16/12/27.
 */
import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import Index from '../pages/index';
import About from '../pages/about';
import FootBar from '../pages/footBar';
import User from '../pages/user';
import File from '../pages/file';
import App from '../pages/app';

const requireAuth = (nextState, replace) => {

}

export default (
    <Route path="/" component={App}>
        <IndexRoute key="index" component={Index} onEnter={requireAuth} />
        <Route path="about/:id" getComponent={(nextState, cb) => {
                  cb(null, About)
                }} onEnter={requireAuth} />
        <Redirect from="footer" to="footer/file" />
        <Route path="footer" component={FootBar} >
            <Route path="user" component={User} />
            <Route path="file" component={File} />
        </Route>
    </Route>
);
