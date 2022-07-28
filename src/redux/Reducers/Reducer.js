import { Constant } from "../Constant";

export const changeCount = (state = 1, { type }) => {       
  switch (type) {
    case Constant.QUANTITY_INC:
        if(state < 3)
      {
        return state + 1;
      }
    break;
    case Constant.QUANTITY_DEC:
      if(state > 1){
        return state - 1;
      }

    break;
    default:
      return state;
  }
};