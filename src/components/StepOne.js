import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { nextButton } from './commonActions';
import { useGetTemplates } from './stepOne/useGetTemplates';
import { findTemplate } from './../server/templateData.js';

export const StepOne = props => {
  const [firstName, setFirstName] = useState('');

  const [templateNames, isError, isLoading] = useGetTemplates();
  const [templateData, setTemplateData] = useState({});

  console.log(
    `templateNames = ${templateNames}, isError = ${isError}, isLoading = ${isLoading}`
  );

  const handleOnChangeFirstName = event => {
    setFirstName(event.target.value);
    console.log('FirstName: ', event.target.value);
    props.updateTemplateData('firstName', event.target.value);
  };

  const handleClickNextButton = event => {
    console.log('clicked  NextButton');
    console.log('Selected Template: ', templateData);
  };

  const handleChangeTemplate = event => {
    console.log('Selected: ', event.target.value);
    setTemplateData(findTemplate(templateNames, event.target.value));
  };

  useEffect(
    () => {
      nextButton.setDisable(true);

      nextButton.attachListener(handleClickNextButton);
      return () => {
        nextButton.detachListener(handleClickNextButton);
      };
    }, // eslint-disable-next-line
    []
  ); //We only want to fetch data when the component mounts. If the array with the variables is empty, the hook doesn’t run when updating the component at all, because it doesn’t have to watch any variables.

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
            <div className="load-status">
              Something went wrong with getting Templates....
            </div>
          )}

          {isLoading ? (
            <div className="load-status">Loading ...</div>
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

export default StepOne;
// StepOne.PropTypes.shape({
//   color: PropTypes.string,
//   fontSize: PropTypes.number
//   })
