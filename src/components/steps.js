import React from 'react';
import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';
import { StepThree } from './StepThree';
import { StepFour } from './StepFour';

let templateData = {};

const updateTemplateData = (key, value) => {
  templateData[key] = value;
  console.log('FirstName:', templateData);
};

let isTemplateNamesUpdatedStatus = false;
const isTemplateNamesUpdated = (status = null) => {
  if (status !== null) {
    isTemplateNamesUpdatedStatus = status;
  }
  return isTemplateNamesUpdatedStatus;
};

const steps = [
  {
    name: 'Choose template',
    component: (
      <StepOne
        updateTemplateData={updateTemplateData}
        isTemplateNamesUpdated={isTemplateNamesUpdated}
      />
    )
  },
  { name: 'Email', component: <StepTwo /> },
  { name: 'Password', component: <StepThree /> },
  { name: 'Agreement', component: <StepFour /> }
];

export { steps };
