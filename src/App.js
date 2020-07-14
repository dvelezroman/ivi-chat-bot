import React from 'react';
import Chatbot from 'react-chatbot-kit';
import './App.css';
import config from './config';
import ActionProvider from './Components/ActionProvider';
import MessageParser from './Components/MessageParser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </header>
    </div>
  );
}

export default App;
