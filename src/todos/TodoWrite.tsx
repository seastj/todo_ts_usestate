import { ChangeEvent, useState } from 'react';
import { ITodoType } from '../types/todoTypes';

interface TodoWriteProps {
  handleTodoUpdate: (newTodo: ITodoType) => void;
}

function TodoWrite({ handleTodoUpdate }: TodoWriteProps) {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now.toString(),
        title: text,
        completed: false,
      };
    }
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => handleChange(e)} />
      <button>등록하기</button>
    </div>
  );
}

export default TodoWrite;
