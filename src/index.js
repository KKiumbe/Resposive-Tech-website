import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App';

console.log(App);  // Add this line to check if App is not undefined

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
