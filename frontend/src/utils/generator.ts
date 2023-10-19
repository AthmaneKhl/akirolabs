const getToken = (allowedDigits: number[]): string => {
  let token = "";
  const getRandomFromAllowed = () => {
    const max = allowedDigits.length;
    const random = Math.random() * max;
    return allowedDigits[Math.floor(random)];
  };

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const randomDigit = getRandomFromAllowed();
      token += randomDigit;
    }
    if (i < 3) {
      token += "-";
    }
  }

  return token;
};

export { getToken };
