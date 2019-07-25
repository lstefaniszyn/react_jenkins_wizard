import React, { useState, useEffect } from 'react';
import { getTemplates, findTemplate } from './../server/templateData.js';

export const StepOne = props => {
  const [firstName, setFirstName] = useState('');
  const [templateNames, setTemplateNames] = useState([]);
  const [templateData, setTemplateData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsDisabledNextButton(true);

    attachLisenerToNextButton(handleClickNextButton);

    const fetchTemplates = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await getTemplates();
        setTemplateNames(response.data);
      } catch (error) {
        console.log('Error: ', error);
        setIsError(true);
        setTemplateNames([]);
      }
      setIsLoading(false);
    };
    fetchTemplates();
    return () =>
      document
        .getElementById('buttonNext')
        .removeEventListener('click', handleClickNextButton);
  }, []); //We only want to fetch data when the component mounts. If the array with the variables is empty, the hook doesn’t run when updating the component at all, because it doesn’t have to watch any variables.


  const handleOnChangeFirstName = event => {
    setFirstName(event.target.value);
    console.log('FirstName: ', event.target.value);
    props.updateTemplateData('firstName', event.target.value);
  };

  const handleChangeTemplate = event => {
    console.log('Selected: ', event.target.value);
    setTemplateData(findTemplate(templateNames, event.target.value));
    setIsDisabledNextButton(false);
  };

  const handleClickNextButton = event => {
    console.log('clicked  NextButton');
  };

  function setIsDisabledNextButton(state) {
    document.getElementById('buttonNext').disabled = state;
  }

  const getDivTemplateNames = () => {
    return (
      <>
        {/* <option key='1' value='test'>TEST</option> */}
        {templateNames &&
          templateNames.map((template, index) => (
            <option key={index} value={template.title} url={template.url}>
              {template.title}
            </option>
          ))}
      </>
    );
  };

  return (
    <div>
      <div className="row">
        <div className="six columns">
          <label>First Name</label>
          <input
            className="u-full-width"
            placeholder="My First Name"
            type="text"
            onChange={handleOnChangeFirstName}
            value={firstName}
            autoFocus
          />
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Template list</label>
          {isError && (
            <div>Something went wrong with getting Templates....</div>
          )}

          {isLoading ? (
            <div>Loading ...</div>
          ) : (
            <select className="u-full-width" onChange={handleChangeTemplate}>
              {getDivTemplateNames()}
            </select>
          )}
        </div>
      </div>
    </div>
  );
};



function attachLisenerToNextButton(handleClickNextButton) {
  document
    .getElementById('buttonNext')
    .addEventListener('click', handleClickNextButton);
}

