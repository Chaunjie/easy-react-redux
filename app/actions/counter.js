/**
 * Created by xudao on 16/12/29.
 */
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const DELETE_COUNTER = 'DELETE_COUNTER'
//导出加一的方法
export function increment() {
    return {
        type: INCREMENT_COUNTER
    }
}
//导出减一的方法
export function decrement() {
    return {
        type: DECREMENT_COUNTER
    }
}
//导出奇数加一的方法，该方法返回一个方法，包含dispatch和getState两个参数，dispatch用于执行action的方法，getState返回state
export function incrementIfOdd() {
    return (dispatch, getState) => {
        //获取state对象中的counter属性值
        const { counter } = getState()

        //偶数则返回
        if (counter % 2 === 0) {
            return
        }
        //没有返回就执行加一
        dispatch(increment())
    }
}
//导出一个方法,包含一个默认参数delay,返回一个方法,一秒后加一
export function incrementAsync(delay = 1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment())
        }, delay)
    }
}
//导出删除count方法
export function deleteCounter(){
    return {
        type: DELETE_COUNTER
    }
}
