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

const steps = [
  {
    name: 'Choose template',
    component: <StepOne updateTemplateData={updateTemplateData} />
  },
  { name: 'Email', component: <StepTwo /> },
  { name: 'Password', component: <StepThree /> },
  { name: 'Agreement', component: <StepFour /> }
];

export { steps };
