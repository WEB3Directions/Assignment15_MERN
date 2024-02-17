import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/slices/todoList.slice'; // Adjust the import path based on your actual file structure
import { GoPlus } from 'react-icons/go';
import { motion } from 'framer-motion';

const mapStateToProps = (state) => {
  return {
    todos: state.user_data.user_data.todos, // Adjust the state path based on your actual file structure
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === '') {
      alert('Input is Empty');
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo('');
    }
  };

  return (
    <div className='addTodos'>
      <input
        type='text'
        onChange={(e) => handleChange(e)}
        className='todo-input'
        value={todo}
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='add-btn'
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
      {/* Display the Todos */}
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.item}</li>
        ))}
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
