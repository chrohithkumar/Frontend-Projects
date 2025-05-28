import React from 'react';
import { CreateProvider } from './UseContext/CreateContext';
import UseContext from './UseContext/UseContext';



export default function App() {
  return (
    <CreateProvider>
      <UseContext />
    </CreateProvider>
  );
}
