import React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin';
import restProvider from 'ra-data-simple-rest'
import CustomerList from './components/customers/CustomerList'
import CustomerCreate from './components/customers/CustomerCreate'
import CustomerEdit from './components/customers/CustomerEdit'
import CustomerShow from './components/customers/CustomerShow';

import CommentList from './components/comments/CommentList';
import CommentEdit from './components/comments/CommentEdit';
import Layout from './Layout'

function App() {
  return (
    <Admin
      // dataProvider={dataProvider}
      dataProvider={restProvider('http://localhost:3000')}
      layout={Layout}
      theme={{
        palette: {
          background: {
            default: '#fafafd',
          },
        },
      }
      }
    >
      <Resource name='customers'
        list={CustomerList}
        create={CustomerCreate}
        show={CustomerShow}
        edit={CustomerEdit}
      />

      <Resource name='comments' 
      list={CommentList}
      edit={CommentEdit}
      />

    </Admin>
  );
}

export default App;
