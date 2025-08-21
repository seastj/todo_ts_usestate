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
  const handleEditSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle);
    }
    setIsEdit(false);
  };
  const handleEditCancle = () => {
    setEditTitle(todo.title);
    setIsEdit(false);
  };

  const liStyle: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const titleStyle: React.CSSProperties = {
    color: todo.completed ? 'gray' : 'black',
    fontWeight: todo.completed ? 'nomral' : 'bold',
    textDecoration: todo.completed ? 'line-through' : 'none',
  };

  return (
    <li style={liStyle}>
      {isEdit ? (
        <>
          <input type="text" value={editTitle} onChange={e => setEditTitle(e.target.value)} />
          <button onClick={handleEditSave}>저장</button>
          <button onClick={handleEditCancle}>취소</button>
        </>
      ) : (
        <>
          <input type="checkbox" onChange={() => onToggle(todo.id)} checked={todo.completed} />
          <span style={titleStyle}>{todo.title}</span>
          <button onClick={handleEdit}>수정</button>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
