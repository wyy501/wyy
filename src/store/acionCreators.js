import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST,UPDATE_ITEM,CHANGE_NAME,CHANGE_ID ,CHANGE_DEP,SAVE_ITEM } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})
// 删除
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})
// 编辑
export const updateItemAction = (index) => ({
    type: UPDATE_ITEM,
    index
})

// 改变姓名
export const changeNameAction = (value) => ({
    type: CHANGE_NAME,
    value
})
// 改变工号
export const changeIdAction = (value) => ({
    type: CHANGE_ID,
    value
})
// 改变部门
export const changeDepAction = (value) => ({
    type:CHANGE_DEP,
    value
})
// 编辑后进行保存
export const saveItemAction = (index) => ({
    type: SAVE_ITEM,
    index
})


export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://mock.mengxuegu.com/mock/605dbe2df2e38f3a2f6b997e/s/homework')
            .then((res) => {
                const data = res.data
                const action = getListAction(data)
                dispatch(action)
            })
    }
}