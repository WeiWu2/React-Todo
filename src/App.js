import React, {Component} from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: [{task:"Do guided project", completed: true},{task:"Drink water", completed: false}],
      initalForm: '',
      formValues:"",
    }
  }
  
  render() {
    const change = (value) => {
      this.setState({
        ...this.state, formValues: value
      })
    }
    // adds new todo to the array and clears the form
const addNewTodo = () => {
  this.setState( {
  todo:[...this.state.todo, {task: `${this.state.formValues}`, completed: false}]
  })
  this.setState( 
    {formValues: this.state.initalForm})
};

// filters through todo state and sets state to a new array with completed todos filtered out
const clearCompleted = () => {
 this.setState(
   {todo: this.state.todo.filter((todo) => {return todo.completed === false})} 
    )
};
// map through the todo array to change the completed boolean to true
const markComplete = (completedTodo) => {
  const newTodo = [...this.state.todo];
  newTodo.map((todo) => {
   return todo ===completedTodo ? todo.completed = !todo.completed : null ;
  })
  this.setState({
    todo:newTodo
  }
  )
}
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList markComplete={markComplete}todoList = {this.state.todo}/>
        <TodoForm formValues={this.state.formValues} change={change} submit={addNewTodo} clearTodo={clearCompleted}/>
      </div>
    );
  }
}

export default App;
