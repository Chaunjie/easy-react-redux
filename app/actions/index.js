/**
 * Created by xudao on 16/12/27.
 */
import Util from '../util/util';
import xhr from '../util/fetch';
import interfaceServices from '../util/interface';

export const INIT_DATA = 'INIT_DATA';

export function refresh(){
    return (dispatch, getState) => {
        Util.returnPromiseResponse(
            xhr.fetch(interfaceServices.getUser, {
                method: 'GET'
            })
        ).then(function (res) {
            const arr = ['first blood', 'double kill', 'triple kill', 'quatary kill', ' penta kill ', 'killing spree', 'dominating', 'rampage', 'God Like', 'legendary'];
            const staticState = {page: 1, pageNum: 10, hasMore: true, list: arr};

            dispatch(function(text){
                return {
                    type: INIT_DATA,
                    text: text
                }
            }(staticState));
        });
    };
}


export function loadMore(callback){
    return (dispatch, getState) => {
        Util.returnPromiseResponse(
            xhr.fetch(interfaceServices.getUser, {
                method: 'GET'
            })
        ).then(function (res) {
            const arr = ['first blood', 'double kill'];
            const { mainState } = getState();
            const staticState = {page: 2, pageNum: 10, hasMore: arr.length >= 10, list: mainState.list.concat(arr)};

            dispatch(function(text){
                return {
                    type: INIT_DATA,
                    text: text
                }
            }(staticState));

            callback && callback();
        });
    };
}

export function initData(){
    return dispatch => {
        Util.returnPromiseResponse(
            xhr.fetch(interfaceServices.getUser, {
                method: 'GET'
            })
        ).then(function (res) {
            const arr = ['first blood', 'double kill', 'triple kill', 'quatary kill', ' penta kill ', 'killing spree', 'dominating', 'rampage', 'God Like', 'legendary'];
            const staticState = {page: 1, pageNum: 10, hasMore: true, list: arr};

            dispatch(function(text){
                return {
                    type: INIT_DATA,
                    text: text
                }
            }(staticState));
        });

    }
}

