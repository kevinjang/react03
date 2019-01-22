// 数据中心

// 新建数据中心的方法的引入
import { createStore } from 'redux'

// 干活儿的工人
const counterReducer = (state = 0, action) => {
    // dispatch把数据提交到这里
    switch (action.type) {
        case "add":
            return state + 1;
        case "minus":
            return state - 1;
        default:
            return state;

    }
}

// 新建数据中心，传入工人
const store = createStore(counterReducer)

// 导出数据中心
export default store