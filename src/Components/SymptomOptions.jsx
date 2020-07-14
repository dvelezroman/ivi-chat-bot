import React from 'react';
import classnames from 'classnames';
import '../styles/LearningOptions.css';

const options = [
  { text: 'Fever', id: 1 },
  { text: 'Headache', id: 2 },
  { text: 'Chills', id: 3 },
  { text: 'Back pain', id: 4 },
  { text: 'Shortness of breath', id: 5 },
];

const useSymptomps = () => {
  const [symptomps, setSymptoms] = React.useState([]);

  const haveSymptomp = React.useCallback((symptompId) => symptomps.includes(symptompId), [
    symptomps,
  ]);

  const addSymptomp = React.useCallback(
    (symptompId) => {
      const updatedSymptomps = [...symptomps];
      updatedSymptomps.push(symptompId);
      setSymptoms(updatedSymptomps);
    },
    [symptomps]
  );

  const deleteSymptomp = React.useCallback(
    (symptompId) => {
      const updatedSymptomps = symptomps.filter((symptomp) => symptomp.id !== symptompId);
      setSymptoms(updatedSymptomps);
    },
    [symptomps]
  );
  return {
    symptomps,
    haveSymptomp,
    addSymptomp,
    deleteSymptomp,
  };
};

const SymptompsOptions = () => {
  const { symptomps, haveSymptomp, addSymptomp, deleteSymptomp } = useSymptomps();
  React.useEffect(() => {
    console.log({ symptomps });
  }, [symptomps]);

  const optionsMarkup = options.map((option) => (
    <button
      className={classnames('learning-option-button', {
        selected: haveSymptomp(option.id),
      })}
      key={option.id}
      onClick={() => {
        if (haveSymptomp(option.id)) {
          deleteSymptomp(option.id);
        } else {
          addSymptomp(option.id);
        }
      }}
    >
      {option.text}
    </button>
  ));
  return (
    <div unselectable="on" className="learning-options-container">
      {optionsMarkup}
    </div>
  );
};

export default SymptompsOptions;
