import { useState } from 'react';
import TodoList from './todos/TodoList';
import TodoWrite from './todos/TodoWrite';

function App() {
  const [todo, setTodo] = useState();

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList />
      <TodoWrite />
    </div>
  );
}

export default App;
