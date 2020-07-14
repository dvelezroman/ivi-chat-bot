import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit';
import { LearningOptions } from '../Components/LearningOptions';

const config = {
  botName: 'IVI Learning Bot',
  initialMessages: [
    createChatBotMessage(`Hi, I'm Ivi. I am here to help. What do you want to learn?`, {
      widget: 'learningOptions',
    }),
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
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
  ],
};

export default config;
