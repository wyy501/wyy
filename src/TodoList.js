import React, { Component } from 'react';
import store from './store'
import { addItemAction, changeInputAction, deleteItemAction, getTodoList, updateItemAction, changeNameAction, changeIdAction, 
    changeDepAction,saveItemAction } from './store/acionCreators'
import TodoListUI from './TodoListUI'



class TodoList extends Component {

    constructor(props) {
        super(props)
        // console.log(store.getState())
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        this.clickBtn = this.clickBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem = this.updateItem.bind(this)
        this.changeName = this.changeName.bind(this)
        this.changeId = this.changeId.bind(this)
        this.changeDep = this.changeDep.bind(this)
        this.saveItem = this.saveItem.bind(this)
        store.subscribe(this.storeChange)

    }
    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                name={this.state.name}
                id={this.state.id}
                department={this.state.department}
                changeInputValue={this.changeInputValue}
                clickBtn={this.clickBtn}
                list={this.state.list}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
                changeName={this.changeName}
                changeId={this.changeId}
                changeDep={this.changeDep}
                saveItem={this.saveItem}
            />
        );
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = addItemAction()
        store.dispatch(action)
    }
    // 删除
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    //编辑
    updateItem(index) {
        const action = updateItemAction(index)
        store.dispatch(action)
    }

    // 改变名字
    changeName(e) {
        const action = changeNameAction(e.target.value)
        store.dispatch(action)
    }
    // 改变id
    changeId(e) {
        const action = changeIdAction(e.target.value)
        store.dispatch(action)
    }
    // 改变部门
    changeDep(e) {
        const action = changeDepAction(e.target.value)
        store.dispatch(action)
    }
    // 进行保存
    saveItem(index) {
        const action = saveItemAction(index)
        store.dispatch(action)
    }


}

export default TodoList;