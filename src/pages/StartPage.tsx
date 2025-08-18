import { useState } from 'react';
import TodoList from '../todos/TodoList';
import TodoWrite from '../todos/TodoWrite';
import { ITodoType } from '../types/todoTypes';

const initialTodos: ITodoType[] = [];
function StartPage(): JSX.Element {
  const [todos, setTodos] = useState<ITodoType[]>(initialTodos);

  const onToggle = () => {
    const arr = todos.map(todo => (todo.id === id ? {} : ''));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <TodoWrite />
    </div>
  );
}

export default StartPage;
