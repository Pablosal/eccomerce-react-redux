export const add_item = id => {
  return {
    type: "ADD_ITEM",
    payload: id
  };
};
export const reset = () => {
  return {
    type: "RESET"
  };
};
export const return_item = () => {
  return {
    type: "RETURN_NUMBER"
  };
};
export const sum_total = () => {
  return {
    type: "SUM_TOTAL"
  };
};
