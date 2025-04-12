import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

function Todofeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Sleep',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Code',
            status: 'new',
        },
    ];

    const [ todoList, setTodoList ] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [ ...todoList ]
        console.log(todo, idx);
        const newTodo = {
            ...newTodoList[ idx ],
            status: newTodoList[ idx ].status === 'new' ? 'completed' : 'new',
        };
        newTodoList[ idx ] = newTodo
        setTodoList(newTodoList);
    };

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

Todofeature.propTypes = {};

export default Todofeature;
