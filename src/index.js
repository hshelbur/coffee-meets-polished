import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import data from './data.json'; data={data}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
