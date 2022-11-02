import React from "react";
import { ACTIONS } from "../pages/SimpleCalculator";

const DigitBtn = ({ dispatch, digit }) => {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitBtn;
