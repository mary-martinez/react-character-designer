import React from 'react';
import Editor from '../components/Editor/Editor';
import Preview from '../components/Preview/Preview';
import './Main.css';
import { useState } from 'react';

export default function Main() {
  const [head, setHead] = useState('bird');
  return (
    <div>
      <Editor setHead={setHead} />
      <Preview head={head} />
    </div>
  );
}
