/**
 * Created by xudao on 16/12/29.
 */
import { INIT_DATA } from '../actions/index'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function index(state = {}, action) {
    switch (action.type) {
        case INIT_DATA:
            return action.text;
        default:
            return state
    }
}
