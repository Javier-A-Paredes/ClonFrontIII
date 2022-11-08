import React, { useState } from 'react'
import Header from './components/header/Header'
import { data } from "./db";
import Tasks from './components/tasks/Tasks';

const done = data.filter(todo => todo.isFinished == true);
const pending = data.filter(todo => todo.isFinished == false);

const Dashboard = () => {
  const [todos, setTodos] = useState(data);
  const [doneTasks, setDoneTasks] = useState(done);
  const [pendingTasks, setPendingTasks] = useState(pending);
  const [selection, setSelection] = useState(null);

  const handleSelection = (param) => {
    setSelection(param);
  }

  const handleTodos = (todo) => {
    console.log(todo)
    const taskSelected = todos.map(td => td.id == todo.id ? {...td, isFinished: !td.isFinished} : td)
    setTodos(taskSelected)
    const tDone = taskSelected.filter(todo => todo.isFinished == true)
    setDoneTasks(tDone)
    const tPending = taskSelected.filter(todo => todo.isFinished == false)
    setPendingTasks(tPending)
  }

  const RenderComponent = (value) => {
    switch(value) {
      case "finished":
        return <Tasks 
        title = "Tareas terminadas"
        data = {doneTasks}
        handleTodos={handleTodos}
        />
      case "pending":
        return <Tasks 
        title = "Tareas pendientes"
        data = {pendingTasks}
        handleTodos={handleTodos}
        />
      default:
      case "todos":
        return <Tasks
        title = {"Lista de todas"}
        data = { todos }
        handleTodos = {handleTodos}
        />
    }
  }

  return (
    <div>
      <Header 
        handleSelection = {handleSelection}
        todos = {todos}
        done = {doneTasks}
        pending= {pendingTasks}
      />
      {RenderComponent(selection)}
    </div>
  )
}

export default Dashboard