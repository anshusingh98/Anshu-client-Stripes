import React from 'react'
import "./incDec.css"
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { increaseCount,decreaseCount } from '../redux/Action';
const IncDec = () => {
    const dispatch = useDispatch();
    const quantity = useSelector((state) => state.quantity);
  return (
    <div className="arrow-drop-up">
    <span
      className="material-icons blue-color"
      style={{ fontSize: "12px" }}
      onClick={() => {
        dispatch(increaseCount());
      }}
    >
      arrow_drop_up
    </span>
    <span
      className="material-icons blue-color"
      style={{ fontSize: "12px" }}
      onClick={() => {
        dispatch(decreaseCount());
      }}
    >
      arrow_drop_down
    </span>
  </div>
  )
}

export default IncDec;