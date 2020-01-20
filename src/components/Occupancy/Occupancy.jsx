import * as React from "react";
import { useState } from "react";
import { FormCard, FormCardHeader } from "../common/FormCard";
import { ProgressButtons } from "../common/ProgressButtons";
import { Container, Input, Row, Col, Label } from "reactstrap";

export const Occupancy = props => {
  const [occupancy, setOccupancy] = useState(props.occupancy);

  return (
    <Container>
      <br />
      <FormCard>
        <FormCardHeader icon="users" header={"Occupants"}>
          <div>
            You can confirm that you have{" "}
            <a href="http://www.tv-control.co.uk/">person's consent</a> to
            provide their personal information
          </div>
        </FormCardHeader>
        <Row>
          <Col md="5">
            <Label>
              Apart from the above, how many other people will be occupying the
              property?
            </Label>
          </Col>
          <Col md="5">
            <Input
              type="number"
              min={0}
              value={occupancy.occupants}
              onChange={e => {
                setOccupancy({ ...occupancy, occupants: e.target.value });
              }}
            />
          </Col>
        </Row>
      </FormCard>
      <FormCard header="Vehicles">
        <Input
          type="number"
          min={0}
          value={occupancy.vehicles}
          onChange={event => {
            setOccupancy({ ...occupancy, vehicles: event.target.value });
          }}
        />
      </FormCard>
      <FormCard header="Pets">
        <Input
          type="number"
          min={0}
          value={occupancy.pets}
          onChange={e => {
            setOccupancy({ ...occupancy, pets: e.target.value });
          }}
        />
      </FormCard>

      <ProgressButtons
        progress={props.progress}
        onUpdate={() => props.onUpdate(occupancy)}
        updateProgress={props.updateProgress}
      />
    </Container>
  );
};
