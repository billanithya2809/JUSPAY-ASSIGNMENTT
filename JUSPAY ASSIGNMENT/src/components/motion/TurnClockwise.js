import React, { useState } from "react";
import { connect } from "react-redux";
import { setCharacterAngle } from "../../redux/character/actions";
import RedoIcon from "@material-ui/icons/Redo";
import Paper from "@material-ui/core/Paper";

const CustomTurnClockwise = ({ character, characterAngle, comp_id }) => {
  const [angle, setAngle] = useState(0);

  // Handle clockwise rotation
  const handleRotation = () => {
    const elementToRotate = document.getElementById(character.active);
    const characterAngleValue = character.characters.find(
      (x) => x.id === character.active
    );

    if (characterAngleValue && elementToRotate) {
      elementToRotate.style.transform = `rotate(${characterAngleValue.angle + angle}deg)`;
      characterAngle(characterAngleValue.angle + angle);
    }
  };

  return (
    <Paper elevation={3}>
      <div className="text-center rounded bg-blue-500 p-2 my-3">
        <div className="grid grid-cols-2">
          <div className="text-white">Rotate By:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
          />
        </div>
        <div
          id={comp_id}
          className={`flex bg-red-600 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer text-center`}
          onClick={() => handleRotation()}
        >
          <div className="flex mx-auto">
            Turn
            <RedoIcon className="mx-2" /> {angle} degrees
          </div>
        </div>
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

// Mapping function to component
const mapDispatchToProps = (dispatch) => {
  return {
    characterAngle: (angle) => dispatch(setCharacterAngle(angle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomTurnClockwise);
