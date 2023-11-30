import React, { useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

// Custom MoveY Component for Sidebar
const CustomMoveY = ({ character, comp_id }) => {
  const [steps, setSteps] = useState(0);

  // Function used for moving Sprint in Y direction
  const handleMoveY = () => {
    const elementToMove = document.getElementById(`${character.active}-div`);

    if (elementToMove) {
      const currentTop = elementToMove.offsetTop;
      elementToMove.style.position = "relative";
      elementToMove.style.top = currentTop + steps + "px";
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className={`text-center rounded bg-blue-700 text-white p-2 my-2 text-sm cursor-pointer mx-auto`}
        onClick={() => handleMoveY()}
      >
        Move Y{" "}
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

export default connect(mapStateToProps)(CustomMoveY);
