import React from 'react';
import Container from './container/Container';
import './assets/style.css'
// import { LocalProvider } from './context/LocalContext';
// import { AdminProvider } from './context/AdminContext';
// import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <div>
      {/* <AdminProvider>
      <LocalProvider >
      <OrderProvider > */}
      <Container />
      {/* </OrderProvider>
      </LocalProvider>
      </AdminProvider> */}
    </div>
  );
}

export default App;
