import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../src/style.css';

const rootHtmlElement = document.getElementById('root');
if (rootHtmlElement) {
  console.log('Запуск react');
  const root = createRoot(rootHtmlElement);
  root.render(<App />);
}
