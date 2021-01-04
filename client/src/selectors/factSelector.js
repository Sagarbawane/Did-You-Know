import factDescription from "../components/static/facts/all/factDescription";

export const findIndividualFact = (fact, id) => {
  return fact.find((ele) => ele._id == id);
};
