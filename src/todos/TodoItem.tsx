import { KeyboardEvent, useState } from 'react';
import { ITodoType } from '../types/todoTypes';

type TodoItemProps = {
  todo: ITodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
  editState: string | null;
  setEditState: (id: string | null) => void;
};

function TodoItem({
  todo,
  onToggle,
  onDelete,
  onEdit,
  editState,
  setEditState,
}: TodoItemProps): JSX.Element {
  const [editTitle, setEditTitle] = useState(todo.title);
  const isEdit = editState === todo.id;

  const handleEdit = () => setEditState(todo.id);
  const handleEditSave = () => {
    if (editTitle.trim()) onEdit(todo.id, editTitle);
    setEditState(null);
  };
  const handleEditCancel = () => {
    setEditTitle(todo.title);
    setEditState(null);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') handleEditSave();
    if (e.key === 'Escape') handleEditCancel();
  };

  return (
    <li className="w-full bg-white rounded-xl shadow-md border border-gray-300 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 transition-colors hover:bg-gray-50">
      {isEdit ? (
        <>
          <textarea
            className="flex-1 border border-gray-300 bg-gray-100 text-gray-900 placeholder-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="할 일을 수정하세요"
          />
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button
              onClick={handleEditSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
            >
              저장
            </button>
            <button
              onClick={handleEditCancel}
              className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-md transition"
            >
              취소
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center gap-3 flex-1">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
              className="w-5 h-5 accent-blue-500"
            />
            <span
              className={`flex-1 text-gray-900 ${
                todo.completed ? 'line-through text-gray-400' : 'font-semibold'
              }`}
            >
              {todo.title}
            </span>
          </div>
          <div className="flex gap-2 mt-2 sm:mt-0">
            <button
              onClick={handleEdit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md transition"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-3 py-1 rounded-md transition"
            >
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
}

export default TodoItem;
