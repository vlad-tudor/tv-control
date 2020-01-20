import * as React from "react";
import Input from "reactstrap/lib/Input";
import FormFeedback from "reactstrap/lib/FormFeedback";

export const ValidInput = props => {
  const validationMessage = props.validation(props.value);
  const { validation, ...originalProps } = props;
  return (
    <>
      <Input {...originalProps} invalid={validationMessage.length > 0} />
      <FormFeedback>{validationMessage}</FormFeedback>
    </>
  );
};
