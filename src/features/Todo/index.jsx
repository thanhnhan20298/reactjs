
import React, { useState } from 'react';

import TodoList from './components/TodoList';
import './styles.scss';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    // const todoList = [
    //     {
    //         id:1,
    //         title:"Eat",
    //         status:"new",
    //     },
    //     {
    //         id:2,
    //         title:"Cook",
    //         status:"completed",
    //     },
    //     {
    //         id:3,
    //         title:"Code",
    //         status:"new",
    //     }
    // ]
    const initTodoList = [
        {
            id:1,
            title:"Eat",
            status:"new",
        },
        {
            id:2,
            title:"Cook",
            status:"completed",
        },
        {
            id:3,
            title:"Code",
            status:"new",
        }
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState("all");

    const handleTodoClick = (todo, index)=>{
        console.log(todo,index)
        // clone current array to new one : khi làm việc vs array or obj thì clone nó ra 1 array or obj mới, thì mới có thể thay đổi
        const newTodoList = [...todoList];

        // toggle status
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === "new" ? "completed" : "new"
        }
        newTodoList[index] = newTodo

        // update todoList
        setTodoList(newTodoList);
    }

    const handleShowAllClick = () => {
        setFilterStatus("all");
        console.log(123)
    }

    const handleShowCompletedClick = () => {
        setFilterStatus("completed");
        console.log(123)

    }

    const handleShowNewClick = () => {
        setFilterStatus("new");
        console.log(123)
    }

    const renderedTodoList = todoList.filter(todo => filterStatus === "all" || filterStatus === todo.status);
    console.log(renderedTodoList)
    return (
        <div>
            <h3>Todo List</h3>
            {/* truyền props todoList cho thằng con để render */}
            {/* <TodoList todoList={todoList}/> */}

            {/*thay đổi state completed new */}
            {/* <TodoList todoList={todoList} onTodoClick ={handleTodoClick}/>*/}

            {/* truyền cho thằng con để render filter */}
            <TodoList todoList={renderedTodoList} onTodoClick ={handleTodoClick}/> 
            <button className="show-all" onClick = {handleShowAllClick}>Show All</button>
            <button className="show-completed" onClick = {handleShowCompletedClick}>Show Completed</button>
            <button className="show-new" onClick = {handleShowNewClick}>Show All</button>
        </div>
    );
}

export default TodoFeature;