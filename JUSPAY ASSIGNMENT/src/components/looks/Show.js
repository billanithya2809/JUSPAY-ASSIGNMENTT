import React from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";

const CustomShow = ({ character, comp_id }) => {
  // To handle show component
  const handleShow = () => {
    const elementToShow = document.getElementById(character.active);
    if (elementToShow) {
      elementToShow.style.display = "inline-block";
    }
  };

  return (
    <Paper elevation={3}>
      <div
        id={comp_id}
        className="rounded text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer mx-auto"
        onClick={() => handleShow()}
      >
        Show
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

export default connect(mapStateToProps)(CustomShow);
