import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const TodoListUI = (props) => {
    return (
        <div style={{ margin: '10px' }}>
            <div>
                <h2>成员管理</h2>
                <hr />
                <Input.Search
                    placeholder={props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}


                />
                <Button
                    type="primary"
                    onClick={props.clickBtn}
                    // +号
                    icon={<PlusOutlined />}
                >新增成员</Button>
            </div>

            <table cellSpacing="10" width="70%">
                <thead>
                    <th>成员姓名</th>
                    <th>工号</th>
                    <th>所属部门</th>
                    <th>操作</th>
                </thead>
                <tbody>
                    {
                        props.list.map((item, index) => {
                            if (item.flag) {
                                return (
                                    <tr key={index}>
                                        <td> {item.name}</td>
                                        <td> {item.id}</td>
                                        <td> {item.department}</td>
                                        <td>
                                            <span onClick={() => { props.updateItem(index) }} style={{ color: 'skyblue', paddingRight: '10px' }}>编辑</span>
                                            <span onClick={() => { props.deleteItem(index) }} style={{ color: 'skyblue' }}>删除</span>
                                        </td>
                                    </tr>
                                )
                            }
                            else {
                                return (
                                    <tr key={index} >
                                        <td><Input value={props.name} onChange={props.changeName} ></Input></td>
                                        <td><Input value={props.id} onChange={props.changeId}></Input></td>
                                        <td><Input value={props.department} onChange={props.changeDep}></Input></td>

                                        <td style={{ width: '200px' }}>
                                            <span onClick={() => { props.saveItem(index) }} style={{ color: 'skyblue', paddingRight: '10px', width: '60px' }}>保存</span>
                                            <span style={{ color: 'skyblue', width: '80px' }}>取消</span>
                                        </td>

                                    </tr>
                                )
                            }

                        })
                    }
                </tbody>
            </table>


        </div>
    );
}

export default TodoListUI;