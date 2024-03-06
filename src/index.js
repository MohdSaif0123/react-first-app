import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';

const elem = document.getElementById('root');
const root = ReactDom.createRoot(elem);
root.render(<App/>)
