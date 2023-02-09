import { useState } from 'react';
import { TodoForm } from './TodoForm/TodoForm';
import { TodoList } from './TodoList/TodoList';

const TYPES_TODO = { done: 'DONE', notDone: 'NOT_DONE', all: 'ALL' };

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState(TYPES_TODO.all);

  const onAddToDo = toDo => {
    setTodos([toDo, ...todos]);
  };
  const onChecked = id => {
    setTodos(
      todos.map(item =>
        id === item.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  return (
    <div>
      <TodoForm onAddToDo={onAddToDo} />
      <TodoList toDos={todos} onChecked={onChecked} />
    </div>
  );
};
