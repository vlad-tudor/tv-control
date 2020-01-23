export const validateObject = (object, validationMapping) => {
  let invalid = false;
  Object.keys(object).forEach(objectKey => {
    Object.keys(validationMapping).forEach(mappingKey => {
      if (mappingKey === objectKey) {
        if (validationMapping[mappingKey](object[objectKey]) !== "") {
          invalid = true;
        }
      }
    });
  });
  return invalid;
};

export const checkNullValidation = message => value => (value ? "" : message);
