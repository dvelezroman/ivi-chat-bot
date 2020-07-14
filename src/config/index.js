import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import SymptomsOptions from '../Components/SymptomOptions';

const config = {
  botName: 'IVI Learning Bot',
  initialMessages: [
    createChatBotMessage(
      `Hi, I'm Ivi. your medical assistance, what are your symptoms?`,
      {
        widget: 'learningOptions',
      }
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  widgets: [
    {
      widgetName: 'learningOptions',
      widgetFunc: (props) => <SymptomsOptions {...props} />,
    },
  ],
};

export default config;
