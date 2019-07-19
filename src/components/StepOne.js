import React, { useState, useEffect } from 'react';
import { getTemplateNames } from './../server/templateData.js';

export const StepOne = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [templateNames, setTemplateNames] = useState('');
  const [templateName, setTemplateName] = useState('');

  const handleOnChangeFirstName = event => {
    setFirstName(event.target.value);
    console.log('FirstName: ', event.target.value);
    props.updateTemplateData('firstName', event.target.value);
  };
  const handleOnChangeLastName = event => {
    setLastName(event.target.value);
  };

  const handleChangeTemplate = event => {
    setTemplateName(event.target.value);
    console.log('Selected: ', event.target.value);
  };

  useEffect(() => {
    console.log('isTemplateNamesUpdated:', props.isTemplateNamesUpdated());
    if (!props.isTemplateNamesUpdated()) {
      props.isTemplateNamesUpdated(true);
      setTemplateNames(getTemplateNames);
    }
  }, [props]); //this is for unmount from each component's render


  const getTemplateNames = () => {
    return(
    <option value="grapefruit">Grapefruit</option>
    <option value="lime">Lime</option>
    <option value="coconut">Coconut</option>
    <option value="mango">Mango</option>
    );

  }

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
          <label>Last Name</label>
          <select onChange={handleChangeTemplate}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>

          <input
            className="u-full-width"
            placeholder="Last Name"
            type="text"
            onChange={handleOnChangeLastName}
            value={lastName}
          />
        </div>
      </div>
    </div>
  );
};
