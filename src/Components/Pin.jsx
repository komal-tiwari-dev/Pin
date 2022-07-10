import React, { useState } from "react";
import PinInput from "./PinInput";
import { useRef } from "react";

const Pin = ({ length, setPin }) => {
  const inputRef = useRef([]);
  const [inputBoxLength] = useState(new Array(length).fill(1));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("")
  );

  const handleOnChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setPin(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setPin(inputBoxValue);
  };

  const handleOnPaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((value, index) => {
      inputBoxValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };
  return (
    <div onPaste={handleOnPaste}>
      {inputBoxLength.map((_, index) => (
        <PinInput
          key={index}
          ref={(element) => {
            inputRef.current[index] = element;
          }}
          onChangeHandler={(e) => handleOnChange(e, index)}
          onBackSpacedHandler={(e) => handleBackSpace(e, index)}
        ></PinInput>
      ))}
    </div>
  );
};

export default Pin;
