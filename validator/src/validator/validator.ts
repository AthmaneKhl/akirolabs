import luhn from "luhn";

const validateToken = (token: string) => {
  return luhn.validate(token.replace(/-/g, ""));
};

export { validateToken };
