const resolveStore = (number: number) => {
  if (number === 1) {
    return "1 kus";
  } else if (number > 1 && number < 5) {
    return `${number} kusy`;
  } else {
    return `${number} kusů`;
  }
};

export default resolveStore;
