import React from 'react';
import Header from './componets/header'; 
import { Notification, Section } from 'rbx';
import Home from './componets/screens/home';


const App = () => {
  return (
    <div>
      <Header />
       <Home />
    </div>
  );
};

export default App;
