import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const CustomHide = ({ character, comp_id }) => {
  // To handle hide component
  const handleHide = () => {
    const elementToHide = document.getElementById(character.active);
    if (elementToHide) {
      elementToHide.style.display = "none";
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className="text-center rounded bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
        onClick={() => handleHide()}
      >
        Hide
      </div>
    </Paper>
  );
};

// Mapping state to props
const mapStateToProps = (state) => {
  return {
    character: state.character,
  };
};

export default connect(mapStateToProps)(CustomHide);
