import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import FileList from './FileList';
import { testFiles } from './testFiles';

const App = () => {
  return (
    <FileList files={testFiles}/>  
  );
};


ReactDOM.render(<App />, document.getElementById('root'));
