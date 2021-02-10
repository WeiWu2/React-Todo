
import React, {Component} from 'react';
import './Todo.css';
export default class Todo extends Component{
render(){
    const {todo, markComplete} = this.props

    const checkCompleted = () => {
        markComplete(todo)
    }
    return (<div onClick = {checkCompleted} className = {todo.completed === true ? 'completed' : ''}
    
    >{todo.task}</div>)
}
}

