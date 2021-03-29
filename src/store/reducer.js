import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, UPDATE_ITEM, CHANGE_NAME, CHANGE_ID, CHANGE_DEP,SAVE_ITEM } from './actionTypes'
const defaultState = {
    inputValue: '搜索成员姓名',
    key: '',
    name: '',
    id: '',
    department: '',
    list: []
}

const states = (state = defaultState, action) => {

    console.log(state, action)

    //Reducer里只能接收state，不能改变state
    if (action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    // 增加
    if (action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        let key=newState.list.length+1;
        newState.list.push({key:key,name:'',id:'',department:'',flag:false})
        return newState
    }
    if (action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    if (action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data.data.list
        return newState
    }
    // 编辑
    if (action.type === UPDATE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list[action.index].flag = false
        newState.name = newState.list[action.index].name
        newState.id = newState.list[action.index].id
        newState.department = newState.list[action.index].department
        return newState

    }
    // 改变姓名
    if (action.type === CHANGE_NAME) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.name = action.value
        return newState
    }

    // 改变工号
    if (action.type === CHANGE_ID) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.id = action.value
        return newState
    }

    // 改变部门
    if (action.type === CHANGE_DEP) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.department = action.value
        return newState
    }
    // 编辑后进行保存
    if (action.type === SAVE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list[action.index].flag=true
        newState.list[action.index].name=newState.name
        newState.list[action.index].id=newState.id
        newState.list[action.index].department=newState.department
        newState.name=''
        newState.id=''
        newState.department=''
        return newState
    }




    return state
}
export default states