import React from "react";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";
import { StepFour } from "./StepFour";

const steps = [
  { name: "Choose template", component: <StepOne /> },
  { name: "Email", component: <StepTwo /> },
  { name: "Password", component: <StepThree /> },
  { name: "Agreement", component: <StepFour /> }
];

export { steps };
