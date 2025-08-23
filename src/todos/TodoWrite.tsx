import { ChangeEvent, useState } from 'react';
import { ITodoType } from '../types/todoTypes';

interface TodoWriteProps {}

function TodoWrite() {
  const [text, setText] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={e => handleChange(e)} />
      <button>등록하기</button>
    </div>
  );
}

export default TodoWrite;
