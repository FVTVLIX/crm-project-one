import React from 'react' 
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest'
import CustomerList from './components/CustomerList'
import CustomerCreate from './components/CustomerCreate'
import CustomerEdit from './components/CustomerEdit'

function App() {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='customers' list={CustomerList} create={CustomerCreate} edit={CustomerEdit} />
    </Admin>
  );
}

export default App;
