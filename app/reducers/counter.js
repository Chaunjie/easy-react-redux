/**
 * Created by xudao on 16/12/29.
 */
import { INCREMENT_COUNTER, DECREMENT_COUNTER, DELETE_COUNTER } from '../actions/counter'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1
        case DELETE_COUNTER:
            return 0
        default:
            return state
    }
}
