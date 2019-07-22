import React, { useState, useEffect } from 'react';
import { getTemplates } from './../server/templateData.js';

export const StepOne = props => {
  const [firstName, setFirstName] = useState('');
  const [templateNames, setTemplateNames] = useState([]);
  const [templateName, setTemplateName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChangeFirstName = event => {
    setFirstName(event.target.value);
    console.log('FirstName: ', event.target.value);
    props.updateTemplateData('firstName', event.target.value);
  };

  const handleChangeTemplate = event => {
    setTemplateName(event.target.value);
    console.log('Selected: ', event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    setTemplateNames(getTemplates);
    setIsLoading(false);
  }, []); //We only want to fetch data when the component mounts. If the array with the variables is empty, the hook doesn’t run when updating the component at all, because it doesn’t have to watch any variables.

  const getDivTemplateNames = () => {
    return (
      <>
        {templateNames.map((template, index) => (
          <option
            key={index}
            value={template.name}
            url_link={template.url_link}
          >
            {template.name}
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
