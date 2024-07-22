import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setError,
}) => {
  const boxNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectHandler = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <>
      <NumberSelectorContainer>
        <p className="error">{error}</p>
        <div className="content-container">
          {boxNumber.map((value, i) => (
            <Box
              isSelected={value === selectedNumber}
              key={i}
              onClick={() => numberSelectHandler(value)}
            >
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
      </NumberSelectorContainer>
    </>
  );
};
NumberSelector.propTypes = {
  selectedNumber: PropTypes.number.isRequired,
  setSelectedNumber: PropTypes.func.isRequired,
  error: PropTypes.string,
  setError: PropTypes.func.isRequired,
};
export default NumberSelector;
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .content-container {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
  .error {
    color: red;
  }
`;
const Box = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.isSelected ? "black" : "white",
    color: props.isSelected ? "white" : "black",
  },
}))`
  height: 60px;
  width: 72px;
  border: 1px solid black;
  border-radius: 3px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  &:focus {
    outline: 2px solid blue;
  }
`;
