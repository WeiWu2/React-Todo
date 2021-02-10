
import React, {Component} from 'react';


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
    const clear = (e) => {
        e.preventDefault();
        clearTodo();
    }

    return (<div>
        <form onSubmit={onSubmit}>
        <input type="text" name="todo" onChange={onChange} value={formValues}></input>
        <div></div>
        <button>Add todo</button>
        <button onClick = {clear}>Clear completed todos</button>
        </form>



    </div>)
}
}