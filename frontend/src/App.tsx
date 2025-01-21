import React from 'react';
import { Provider } from 'react-redux';
import styled from '@emotion/styled';
import logo from './logo.svg';
import './App.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { TextareaAutosize, Button } from '@mui/material';

import {
  useGetUserQuery,
  useGetTodosQuery,
  useCreateTodoMutation
} from './api';
import { store } from './store';

const Playground = styled.div`
  height: 200px;
  width: 100%;
  background-color: white;
`

const FieldWrapper = styled(Box)`
  height: 40px;
  width: 25ch;
  display: flex;
`

const SubmitButton = styled(Button)`
  border-radius: 8px;
`

const Content = () => {
  const res = useGetUserQuery()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Playground>
          <FieldWrapper>
            <TextField id="email" variant="outlined" placeholder='enter email' />
            <TextareaAutosize id="content" placeholder='enter todo' />
            <SubmitButton variant='outlined'>
              Save
            </SubmitButton>
          </FieldWrapper>
        </Playground>
      </header>
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;
