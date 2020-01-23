import { validateObject, checkNullValidation } from "./util";

export const propertyOptions = [
  { value: "appartment", label: "Appartment" },
  { value: "semi_detatched", label: "Semi detatched" },
  { value: "castle", label: "Castle" }
];

// validation functions for each specific field
export const notNullProperty = checkNullValidation("Must provide an address");
export const notNullAgency = checkNullValidation("Must provide an agent name");
export const notNullDate = checkNullValidation("Must provide a date");

// validation button for the button to prevent proress
export const propertyValidationMapping = {
  address: notNullProperty,
  agency: notNullAgency,
  commencementDate: notNullDate
};

export const validateProperty = property => {
  return validateObject(property, propertyValidationMapping);
};
