import React from 'react'
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import restProvider from 'ra-data-simple-rest'
import CustomerList from './components/customers/CustomerList'
import CustomerCreate from './components/customers/CustomerCreate'
import CustomerEdit from './components/customers/CustomerEdit'
import CustomerShow from './components/customers/CustomerShow';
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
    </Admin>
  );
}

export default App;
