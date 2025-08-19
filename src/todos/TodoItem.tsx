import { useState } from 'react';
import { ITodoType } from '../types/todoTypes';

type TodoItemProps = {
  todo: ITodoType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string) => void;
};

function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleEdit = () => {
    setIsEdit(true);
  };
  return (
    <li>
      {isEdit ? (
        <>
          <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          <button>저장</button>
          <button>취소</button>
        </>
      ) : (
        <>
          <input type="checkbox" />
          <span>{todo.title}</span>
          <button onClick={handleEdit}>수정</button>
          <button>삭제</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
