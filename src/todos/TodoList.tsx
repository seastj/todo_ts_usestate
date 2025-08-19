import { ITodoType } from '../types/todoTypes';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: ITodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};
function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps): JSX.Element {
  return (
    <div>
      <h2>할일 목록</h2>
      <ul>
        {todos.map(item => (
          <TodoItem
            key={item.id}
            todo={item}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
