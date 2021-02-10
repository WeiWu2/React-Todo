
import React, {Component} from 'react';
import Todo from './Todo'


export default class TodoForm extends Component{
render(){
    const {formValues, change,submit, clearTodo} = this.props;
    const onChange = (e) => {
        change(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }


    return (<div>
        <form onSubmit={onSubmit}>
        <input type="text" name="todo" onChange={onChange} value={formValues}></input>
        <div></div>
        <button>Add todo</button>
        <button onClick = {clearTodo}>Clear completed todos</button>
        </form>



    </div>)
}
}