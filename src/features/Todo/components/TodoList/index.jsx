import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

function TodoList({ todoList = [], onTodoClick }) {
    const [ isBoolean, setIsBoolean ] = useState(false);
    const handleTodoClick = (todo, idx) => {
        setIsBoolean(!isBoolean);
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    };

    return (
        <ul className='todo-list'>
            {todoList.map((todo, idx) => (
                <li
                    key={todo.id}
                    style={isBoolean ? { border: "1px solid black" } : undefined}
                    onClick={() => handleTodoClick(todo, idx)}
                >
                    {todo.title}
                </li>

            ))}
        </ul>
    );
}

export default TodoList;
