import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes()  {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Tansaction 1',
          amount: 400,
          category: 'deposit',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Tansaction 2',
          amount: 200,
          category: 'withdraw',
          createdAt: new Date()
        }
      ]
    })

    this.post('/transactions', (shema, request) => {
      const data = JSON.parse(request.requestBody);

      return data;
    })


  } 
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
