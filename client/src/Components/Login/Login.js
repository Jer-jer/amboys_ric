import React from 'react';
import Form from './form';
import Logo from '../Logo(temp)/logo';
import Box from '@material-ui/core/Box';

function Login(){
  return (
    <div>
      <Box pl={2}>
        <Logo />
        <Form />
      </Box>
    </div>
  );
}

export default Login;
