import React from 'react';
import Editor from '../components/Editor/Editor';
import Preview from '../components/Preview/Preview';
import './Main.css';
import { useState } from 'react';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('pink');
  const [bottom, setBottom] = useState('leg');
  return (
    <main>
      <Editor setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} />
      <Preview head={head} middle={middle} bottom={bottom} />
    </main>
  );
}
