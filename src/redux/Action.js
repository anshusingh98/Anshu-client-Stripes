import {Constant} from "./Constant"




export const increaseCount = () => {
  return{
    type:Constant.QUANTITY_INC
  }
}

export const decreaseCount = () => {
  return{
    type:Constant.QUANTITY_DEC
  }
}