import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Left from './pages/demo/Left';
import Admine from "./admine";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Admine />, document.getElementById('root'));
registerServiceWorker();
