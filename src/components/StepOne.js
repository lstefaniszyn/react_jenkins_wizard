import React, { useState } from 'react';
import { getTemplateNames } from './../server/templateData.js';

export const StepOne = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [templateNames, setTemplateNames] = useState(getTemplateNames());

  const handleOnChangeFirstName = event => {
    setFirstName(event.target.value);
    props.updateTemplateData('firstName', event.target.value);
  };
  const handleOnChangeLastName = event => {
    setLastName(event.target.value);
  };

  console.log('TemplateData', templateNames);

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
          <select>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
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
