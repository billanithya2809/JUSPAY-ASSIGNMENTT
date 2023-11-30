import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// Custom Move Component for Sidebar
const CustomMove = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(0);

  // Function used for moving Sprint
  const handleMove = () => {
    const elementToMove = document.getElementById(`${character.active}-div`);

    if (elementToMove) {
      const currentPosition = elementToMove.offsetLeft;
      elementToMove.style.position = "relative";
      elementToMove.style.left = currentPosition + steps + "px";
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleMove()}
      >
        Move X{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))}
        />{" "}
        steps
      </div>
    </Paper>
  );
};

// Mapping state to component
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(CustomMove);
