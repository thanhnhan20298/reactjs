import React from 'react';

import TodoList from './components/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id:1,
            title:"Eat"
        },
        {
            id:2,
            title:"Cook"
        },
        {
            id:3,
            title:"Code"
        }
    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;