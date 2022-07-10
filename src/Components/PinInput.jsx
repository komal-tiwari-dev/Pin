import React, { forwardRef } from "react";

const PinInput = forwardRef(({ onChangeHandler, onBackSpacedHandler }, ref) => {
  const onKeyUpHandler = (e) => {
    if (e.keyCode === 8) {
      onBackSpacedHandler(e);
    } else {
      onChangeHandler(e);
    }
  };
  return (
    <>
      <input ref={ref} maxLength={1} onKeyUp={onKeyUpHandler} />
    </>
  );
});

export default PinInput;
