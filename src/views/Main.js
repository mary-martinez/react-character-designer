import React from 'react';
import Editor from '../components/Editor/Editor';
import Preview from '../components/Preview/Preview';
import './Main.css';
import { useState } from 'react';
import Phrases from '../components/Phrases/Phrases';

export default function Main() {
  const [head, setHead] = useState('bird');
  const [middle, setMiddle] = useState('pink');
  const [bottom, setBottom] = useState('leg');
  const [catchphrases, setCatchphrases] = useState([]);
  const [catchphrase, setCatchphrase] = useState('');
  return (
    <main>
      <Editor setHead={setHead} setMiddle={setMiddle} setBottom={setBottom} />
      <Preview head={head} middle={middle} bottom={bottom} />
      <Phrases catchphrase={catchphrase} setCatchphrase={setCatchphrase} catchphrases={catchphrases} setCatchphrases={setCatchphrases} />
    </main>
  );
}
