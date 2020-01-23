import * as React from "react";
import { useState } from "react";
import { Container, Label, Row, Col } from "reactstrap";
import { FormCard } from "../common/FormCard";
import { ProgressButtons } from "../common/ProgressButtons";
import { PropertySelect } from "./PropertySelect";
import { StandardInput, withValidation } from "../common/ValidInput";
import {
  notNullProperty,
  validateProperty,
  notNullAgency,
  notNullDate
} from "../../domain/property";
import DatePicker from "react-datepicker";

const ValidDatePicker = withValidation(DatePicker);

export const PropertyDetails = props => {
  const [property, setProperty] = useState(props.property);
  const invalid = validateProperty(property);
  return (
    <Container>
      <br />
      <FormCard icon="home" header="Property Details">
        <StandardInput
          label="Property Address"
          validation={notNullProperty}
          type="text"
          value={property.address}
          onChange={e => {
            setProperty({ ...property, address: e.target.value });
          }}
        />
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
        <br />
        <Row>
          <Col md="5">
            <Label>Date of commencement</Label>
          </Col>
          <Col md="5">
            <ValidDatePicker
              validationMessage={notNullDate(property.commencementDate)}
              selected={property.commencementDate}
              onChange={date =>
                setProperty({ ...property, commencementDate: date })
              }
            />
          </Col>
        </Row>
      </FormCard>

      <FormCard header="Property Manager Details" icon="userTie">
        <StandardInput
          label="Agent Name"
          validation={notNullAgency}
          type="text"
          value={property.agencyName}
          onChange={e => {
            setProperty({ ...property, agencyName: e.target.value });
          }}
        />
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
