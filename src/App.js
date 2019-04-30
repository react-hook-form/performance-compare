import React from 'react';
import Form from './FormRedux';
import { Provider } from "react-redux";
import store from "./store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div style={{ padding: 15 }}>
        <h2>Redux form</h2>
        <Form />
      </div>
    </Provider>
  );
}

export default App;
