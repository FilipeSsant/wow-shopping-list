import validator from "validator";

const validate = (value, type) => {
  switch (type) {
    case "required":
      if (validator.isEmpty(value)) {
        return "campo obrigatório";
      }
      break;
    case "quantity":
      if (parseInt(value) === 0 || validator.isEmpty(value)) {
        return "quantidade inválida";
      }
      break;
    default:
      break;
  }
  return false;
};

export default validate;
