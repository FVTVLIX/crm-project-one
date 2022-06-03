import React from 'react' 
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import restProvider from 'ra-data-simple-rest'
import CustomerList from './components/CustomerList'
import CustomerCreate from './components/CustomerCreate'
import CustomerEdit from './components/CustomerEdit'
import Layout from './Layout'
import tags from './components/tags';

function App() {
  return (
    <Admin 
    // dataProvider={dataProvider}
    dataProvider={restProvider('http://localhost:3000')}
    layout={Layout}
    theme={{
        palette: {
            background: {
                default: '#fafafb',
            },
        },
    }
  }
    >
      <Resource name='customers' 
      list={CustomerList}
      create={CustomerCreate} 
      edit={CustomerEdit} />

      <Resource name='tags' {...tags} />
    </Admin>
  );
}

export default App;
