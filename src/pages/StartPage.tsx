import { useEffect, useState } from 'react';
import TodoList from '../todos/TodoList';
import TodoWrite from '../todos/TodoWrite';
import { ITodoType } from '../types/todoTypes';
import Header from '../components/Header';

const initialTodos: ITodoType[] = [];

function StartPage(): JSX.Element {
  const [todos, setTodos] = useState<ITodoType[]>(initialTodos);

  const handleTodoUpdate = (newTodo: ITodoType) => {
    setTodos(prev => [newTodo, ...prev]);
  };
  const handleDeleteSelected = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };
  const handleClearAll = () => {
    setTodos([]);
  };

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
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex justify-center items-start p-4">
        <div className="w-full max-w-lg flex flex-col items-center gap-10 mt-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 drop-shadow-md text-center">
            My Todo List
          </h1>
          <div className="w-full flex flex-col gap-6 bg-white rounded-2xl shadow-xl p-6 border border-gray-300">
            <TodoWrite
              handleTodoUpdate={handleTodoUpdate}
              className="w-full bg-gray-50 text-gray-900 rounded-xl shadow-md p-4 placeholder-gray-400 focus-within:ring-2 focus-within:ring-blue-500 transition-colors"
            />
            <TodoList
              todos={todos}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
              handleDeleteSelected={handleDeleteSelected}
              handleClearAll={handleClearAll}
              className="bg-gray-50 border border-gray-300 rounded-2xl shadow-lg divide-y divide-gray-200 p-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default StartPage;
