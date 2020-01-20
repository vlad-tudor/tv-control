import React, { Component } from "react";
import Select from "react-select";
import { propertyOptions } from "../../domain/property";

export const PropertySelect = props => {
  return (
    <Select
      options={propertyOptions}
      onChange={props.onChange}
      defaultValue={propertyOptions.filter(el =>
        el.value === props.type ? el : null
      )}
    />
  );
};
