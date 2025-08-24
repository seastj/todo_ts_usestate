import { useState } from 'react';
import { ITodoType } from '../types/todoTypes';
import TodoItem from './TodoItem';

type TodoListProps = {
  todos: ITodoType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  className?: string;
  handleDeleteSelected: () => void;
  handleClearAll: () => void;
};

function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  className,
  handleDeleteSelected,
  handleClearAll,
}: TodoListProps): JSX.Element {
  const [editState, setEditState] = useState<string | null>(null);

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      <div className="flex justify-between p-1">
        <h2 className="text-xl font-semibold text-blue-700">할 일 목록</h2>
      </div>
      {todos.length === 0 ? (
        <p className="flex justify-center pt-5 pb-5 text-gray-500">등록된 할 일이 없습니다.</p>
      ) : (
        <ul className="flex flex-col pt-5 gap-3">
          {todos.map(item => (
            <TodoItem
              key={item.id}
              todo={item}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
              editState={editState}
              setEditState={setEditState}
            />
          ))}
          <div className="flex justify-between p-1 pt-5">
            <button
              onClick={handleDeleteSelected}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors focus:outline-none"
            >
              선택된 할 일 삭제
            </button>
            <button
              onClick={handleClearAll}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg shadow-md transition-colors focus:outline-none"
            >
              전체 삭제
            </button>
          </div>
        </ul>
      )}
    </div>
  );
}

export default TodoList;
