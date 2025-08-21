import { useEffect, useState } from 'react';
import TodoList from '../todos/TodoList';
import TodoWrite from '../todos/TodoWrite';
import { ITodoType } from '../types/todoTypes';

const initialTodos: ITodoType[] = [
  { id: '1', title: '할일 1', completed: false },
  { id: '2', title: '할일 2', completed: true },
  { id: '3', title: '할일 3', completed: true },
  { id: '4', title: '할일 4', completed: false },
  { id: '5', title: '할일 5', completed: true },
];

function StartPage(): JSX.Element {
  const [todos, setTodos] = useState<ITodoType[]>(initialTodos);

  const onToggle = (id: string) => {
    const arr = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(arr);
  };
  const onDelete = (id: string) => {
    const arr = todos.filter(todo => todo.id !== id);
    setTodos(arr);
  };
  const onEdit = (id: string, newTitle: string) => {
    const arr = todos.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo));
    setTodos(arr);
  };

  useEffect(() => {
    setTodos(initialTodos);
  }, []);
  return (
    <div>
      <h1>Todo List</h1>
      <TodoWrite />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} />
    </div>
  );
}

export default StartPage;
