import { validateObject } from "./util";

export const propertyOptions = [
  { value: "appartment", label: "Appartment" },
  { value: "semi_detatched", label: "Semi detatched" },
  { value: "castle", label: "Castle" }
];

export const notNullProperty = value => (value ? "" : "Must provide address");

export const propertyValidationMapping = {
  address: notNullProperty
};

export const validateProperty = property => {
  return validateObject(property, propertyValidationMapping);
};
