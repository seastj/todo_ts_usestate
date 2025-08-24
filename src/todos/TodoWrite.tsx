import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { ITodoType } from '../types/todoTypes';

interface TodoWriteProps {
  handleTodoUpdate: (newTodo: ITodoType) => void;
  className?: string;
}

function TodoWrite({ handleTodoUpdate, className }: TodoWriteProps) {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo: ITodoType = {
        id: Date.now().toString(),
        title: text,
        completed: false,
      };
      handleTodoUpdate(newTodo);
      setText('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
    if (e.key === 'Escape') setText('');
  };

  return (
    <div className={`flex gap-3 border border-gray-300 ${className}`}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none"
      >
        등록
      </button>
    </div>
  );
}

export default TodoWrite;
