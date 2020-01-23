import * as React from "react";
import FormFeedback from "reactstrap/lib/FormFeedback";
import { Row, Col, Input, Label } from "reactstrap";

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

export const StandardInput = props => {
  const { label, inputWidth = 7, ...originalProps } = props;
  return (
    <Row>
      <Col md="5">
        <Label>{label}</Label>
      </Col>
      <Col md={inputWidth}>
        <ValidInput {...originalProps} />
      </Col>
    </Row>
  );
};

export const withValidation = BaseComponent => props => {
  const { validationMessage = "", ...baseProps } = props;
  const invalid = validationMessage.length > 0 ? true : false;
  const nameOfClass = invalid ? " invalid" : "";
  console.log(validationMessage, invalid);

  return (
    <div
      style={{ maxWidth: "fit-content" }}
      className={"with-validation" + nameOfClass}
    >
      <BaseComponent {...baseProps} />
      {invalid ? (
        <div className="validation-message">{validationMessage}</div>
      ) : null}
    </div>
  );
};
