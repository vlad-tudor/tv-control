import * as React from "react";
import { steps } from "../../domain/progress";
import { Button } from "reactstrap";

export const ProgressButtons = props => {
  const currentStep = props.progress.step;
  return (
    <div className="progress-buttons">
      {currentStep > 0 ? (
        <Button onClick={() => props.updateProgress({ step: currentStep - 1 })}>
          {"<"} back
        </Button>
      ) : null}
      {currentStep < steps.length - 1 ? (
        <Button
          color="primary"
          onClick={() => {
            props.onUpdate();
            props.updateProgress({ step: currentStep + 1 });
          }}
        >
          next: {steps[currentStep + 1].title} >
        </Button>
      ) : null}
    </div>
  );
};
