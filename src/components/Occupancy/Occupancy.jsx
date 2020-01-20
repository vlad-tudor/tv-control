import * as React from "react";
import { useState } from "react";
import { FormCard } from "../common/FormCard";
import { ProgressButtons } from "../common/ProgressButtons";
import { Container, Button, Input } from "reactstrap";
import { steps } from "../../domain/progress";

export const Occupancy = props => {
  const [occupancy, setOccupancy] = useState(props.occupancy);

  return (
    <Container>
      <br />
      <FormCard header="Occupants">
        <Input
          type="number"
          min={0}
          value={occupancy.occupants}
          onChange={e => {
            setOccupancy({ ...occupancy, occupants: e.target.value });
          }}
        />
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
