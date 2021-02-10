
import React, {Component} from 'react';

import Todo from './Todo';

export default class TodoList extends Component{
render(){
    const {todoList, markComplete} = this.props;
    return (
    <div>
       {todoList.map((todo) => {
          return <Todo markComplete={markComplete}todo={todo}/>
       })}
    </div>)
}
}