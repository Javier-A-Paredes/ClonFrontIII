import React from 'react'
import { TaskContainer, TaskCard, Button } from "./TaskStyle"

function Tasks({data, title, handleTodos}) {
    
    return (
    <TaskContainer>
        <h1>{title}</h1>        
        {
            data.map(todo =>(
            <TaskCard key = { todo.id }>
                <section style={{ width: "80%" }}>
                    Lavar la loza
                </section>
                <section style ={{ width: "20%"}}>
                    <Button bgColor = {todo.isFinished} onClick={() => handleTodos(todo)}>{todo.isFinished ? "Hecho" : "Pendiente"}</Button>
                </section>
            </TaskCard>
            ))
        }
    </TaskContainer>
  )
}

export default Tasks