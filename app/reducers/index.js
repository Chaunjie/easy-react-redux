/**
 * Created by xudao on 16/12/27.
 */
import { combineReducers } from 'redux'
import counter from './counter';
import main from './main';
import file from './file';

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    counter: counter,
    mainState: main,
    fileState: file
})

export default rootReducer
