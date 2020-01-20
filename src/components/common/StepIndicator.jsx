import * as React from "react";
import Stepper from "react-stepper-horizontal";
import { steps } from "../../domain/progress";

export const StepIndicator = props => (
  <Stepper steps={steps} activeStep={props.step} />
);
