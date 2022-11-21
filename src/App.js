import React from 'react';
import { Container} from 'react-bootstrap';
import Address from './Component/Profile/Address';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import './App.css';

const App = () => {
  return (
    <Container className='auth-inner'>
      <ProfilePhoto />
      <FullName />
      <Address />
    </Container>
  )
}

export default App