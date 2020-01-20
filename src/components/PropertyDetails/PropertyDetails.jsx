import * as React from "react";
import { useState } from "react";
import { Container, Input, Label, Row, Col, FormFeedback } from "reactstrap";
import { FormCard } from "../common/FormCard";
import { ProgressButtons } from "../common/ProgressButtons";
import { PropertySelect } from "./PropertySelect";
import { ValidInput } from "../common/ValidInput";
import { notNullProperty, validateProperty } from "../../domain/property";

export const PropertyDetails = props => {
  const [property, setProperty] = useState(props.property);
  const invalid = validateProperty(property);
  return (
    <Container>
      <br />
      <FormCard icon="home" header="Property Details">
        <Row>
          <Col md="5">
            <Label>Applicaiton Address</Label>
          </Col>
          <Col md="7">
            <ValidInput
              validation={notNullProperty}
              type="text"
              value={property.address}
              onChange={e => {
                setProperty({ ...property, address: e.target.value });
              }}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="5">
            <Label>Property Type</Label>
          </Col>
          <Col md="5">
            <PropertySelect
              type={props.property.type}
              onChange={input =>
                setProperty({ ...property, type: input.value })
              }
            />
          </Col>
        </Row>
      </FormCard>

      <FormCard header="Property Manager Details">
        <Row>
          <Col md="5">
            <Label>Agent Name</Label>
          </Col>
          <Col md="7">
            <Input
              type="text"
              value={property.agencyName}
              onChange={e => {
                setProperty({ ...property, agencyName: e.target.value });
              }}
            />
          </Col>
        </Row>
      </FormCard>

      <ProgressButtons
        invalid={invalid}
        progress={props.progress}
        onUpdate={() => props.onUpdate(property)}
        updateProgress={props.updateProgress}
      />
    </Container>
  );
};
