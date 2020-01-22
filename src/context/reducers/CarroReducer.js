import Data from "../data";

const initialState = {
  favoritos: [],
  inCar: 0,
  finalPrice: 0
};
// Data.find;
export const CarroReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        favoritos: [...state.favoritos, action.payload]
      };
    case "RETURN_NUMBER":
      return {
        ...state,
        inCar: state.favoritos.length
      };
    case "SUM_TOTAL":
      return {
        ...state,
        finalPrice: state.favoritos.reduce((sum, { price }) => sum + price, 0)
      };
    case "RESET":
      return {
        ...state,
        favoritos: []
      };
    default:
      return state;
  }
};
