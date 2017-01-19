/**
 * Created by xudao on 16/12/29.
 */
import { INIT_FILE_DATA , SAVE_SCROLL} from '../actions/file'

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
export default function index(state = {}, action) {
    switch (action.type) {
        case INIT_FILE_DATA:
            return action.text;
        case SAVE_SCROLL:
            state.scrollTop = action.text;
            return state;
        default:
            return state
    }
}
