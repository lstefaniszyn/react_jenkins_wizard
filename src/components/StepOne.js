import React, { useState } from 'react';

export const StepOne = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleOnChangeFirstName = event => {
    setFirstName(event.target.value);
  };
  const handleOnChangeLastName = event => {
    setLastName(event.target.value);
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
          <label>Last Name</label>
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


