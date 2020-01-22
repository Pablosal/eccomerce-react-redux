import Data from "../data";
const initialState = {
  data: Data
};
const EcommerceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      break;

    default:
      return state;
  }
};
export default EcommerceReducer;
